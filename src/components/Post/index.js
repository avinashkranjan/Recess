import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style.js";
import { db } from "../../firebase";
import firebase from "firebase";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import brokenImage from "../../assets/broken-image.png";
import CommentInput from "../../components/CommentInput"


const useStyles = makeStyles(styles);

function Post({ postId, user, username, caption, imageUrl, setId }) {
  const classes = useStyles();
  const postImage = useRef();
  const [comments, setComments] = useState([]);
  const [temp, setTemp] = useState(classes.showComments);

  const postComment = (comment) => {
    
    db.collection("posts").doc(postId).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    postImage.current.onload = () => {
      if (postImage.current.height > postImage.current.width) {
        postImage.current.style.maxHeight = "350px";
      } else if (postImage.current.height < postImage.current.width) {
        postImage.current.style.maxWidth = "100%";
      } else {
        postImage.current.style.maxHeight = "350px";
      }
    };
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          const tempComments = [];
          for (let doc of snapshot.docs) {
            tempComments.unshift(doc.data());
          }
          setComments(tempComments);
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const handleChange = () => {
    setId(postId);
  };

  const handleBrokenImage = (e) => {
    e.target.src = brokenImage;
    e.target.width = 32;
    e.target.height = 32;
  };

  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <Avatar className={classes.avatar} alt={username} src="" />
        <h3 className={classes.username}>{username}</h3>
      </div>

      <div className={classes.postImageHolder}>
        <img
          className={classes.postImage}
          src={imageUrl}
          alt={`Post by ${username}`}
          ref={postImage}
          onError={handleBrokenImage}
        />
      </div>

      <div className={classes.postText}>
        <strong>{username}</strong> {caption}
      </div>

      <div
        className={temp}
        onMouseOver={() => setTemp(classes.showCommentsHover)}
        onMouseOut={() => setTemp(classes.showComments)}
        onClick={handleChange}
      >
        View all {comments.length} comments
      </div>

      <div className={classes.postComments}>
        {comments &&
          comments.map((comment, index) => (
            <p key={`comment-index-${index}`}>
              <strong> {comment.username} </strong> {comment.text}
            </p>
          ))[0]}
      </div>

      {user && <CommentInput postComment={postComment} />}

      <Link to={`/post/${postId}`} className={classes.viewPostBtn}>
        View Post
      </Link>
    </div>
  );
}

export default Post;
