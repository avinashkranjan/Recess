import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style.js";
import { db } from "../../firebase";
import firebase from "firebase";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function Post({ postId, user, username, caption, imageUrl }) {
  const classes = useStyles();
  const postImage = useRef();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
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
            console.log(doc.data());
          }
          setComments(tempComments);
          // setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <Avatar className={classes.avatar} alt="Avinash" src="" />
        <h3 className={classes.username}>{username}</h3>
      </div>

      <div className={classes.postImageHolder}>
        <img
          className={classes.postImage}
          src={imageUrl}
          alt="PostImage"
          ref={postImage}
        />
      </div>

      <div className={classes.postText}>
        <strong>{username}</strong> {caption}
      </div>

      <div className={classes.postComments}>
        {comments &&
          comments.map((comment, index) => (
            <p key={`comment-index-${index}`}>
              <strong> {comment.username} </strong> {comment.text}
            </p>
          ))}
      </div>

      {user && (
        <form className={classes.postCommentBox}>
          <input
            className={classes.postCommentInput}
            type="text"
            placeholder="Add a comment.."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className={classes.postCommentButton}
            type="submit"
            disabled={!comment}
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}

      <Link to={`/post/${postId}`} className={classes.viewPostBtn}>
        View Post
      </Link>
    </div>
  );
}

export default Post;
