import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.js";
import { db } from "../../firebase";
import firebase from "firebase";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CommentInput from "../../components/CommentInput";

const useStyles = makeStyles(styles);

function Postpage() {
  const classes = useStyles();
  const { postId } = useParams();

  const [user, setUser] = useState({});
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log(postId);
    let unsubscribeComments, unsubscribePost;
    if (postId) {
      unsubscribeComments = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });

      unsubscribePost = db
        .collection("posts")
        .doc(postId)
        .onSnapshot((snapshot) => {
          setPostData(snapshot.data());
        });
    }

    setUser(firebase.auth().currentUser);

    return () => {
      unsubscribeComments();
      unsubscribePost();
    };
  }, []);

  const postComment = (comment) => {
    db.collection("posts").doc(postId).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <Avatar className={classes.avatar} alt="Avinash" src="" />
        <h3 className={classes.username}>{postData.username}</h3>
      </div>

      <img
        className={classes.postImage}
        src={postData.imageUrl}
        alt="PostImage"
      />

      <div className={classes.postText}>
        <strong>{postData.username}</strong> {postData.caption}
      </div>

      <div className={classes.postComments}>
        {comments &&
          comments.map((comment, index) => (
            <p key={`comment-index-${index}`}>
              <strong> {comment.username} </strong> {comment.text}
            </p>
          ))}
      </div>

      {postData && <CommentInput postComment={postComment} />}
    </div>
  );
}

export default Postpage;
