import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.js";
import { db } from "../../firebase";
import firebase from "firebase";
import Post from "../../components/Post";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import Emoji from "react-emoji-render";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CancelIcon from "@material-ui/icons/Cancel";
import CommentInput from "../../components/CommentInput";

const useStyles = makeStyles(styles);

const PostModal = (props) => {
  const classes = useStyles();
  return (
    <Modal className={classes.modal} open={props.postModal}>
      <div className={classes.modalContainer}>
        <div className={classes.modalHeader}>
          <h1 className={classes.modalUsername}>{props.postData.post.username}</h1>
          <h1
            className={classes.closeModal}
            onClick={(e) => {
              e.preventDefault();
              props.setPostModal(false);
              props.setId(null);
            }}
          >
            ✖
          </h1>
        </div>
        <div className={classes.modalMain}>
          <div className={classes.postImageHolder}>
            <div className={classes.postImageContainer}>
              <img src={props.postData.post.imageUrl} className={classes.postImage} />
            </div>
          </div>

          <aside className={classes.commentContainer}>
            <div className={classes.postedComments}>
              {props.comments &&
                props.comments.map((comment, index) => (
                  <div style={{marginBottom:4}}>
                    <strong> {comment.username} </strong> <br></br>
                    <Emoji text={comment.text} key={`comment-index-${index}`} />
                  </div>
                ))}
            </div>
            <div className={classes.postCommentsContainer}>
              {props.user && <CommentInput postComment={props.postComment} />}
            </div>
          </aside>
        </div>
      </div>
    </Modal>
  );
};

function Homepage({ posts, user }) {
  const classes = useStyles();
  const history = useHistory();
  const [Id, setId] = useState("");
  const [postModal, setPostModal] = useState(false);
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(true);

  const postComment = (comment) => {
    db.collection("posts").doc(Id).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (Id) {
      posts.forEach((post) => {
        if (post.id === Id) {
          console.log(Id + " " + post.id);
          setPostData((prev) => ({ ...prev, ...post }));
        }
      });

      unsubscribe = db
        .collection("posts")
        .doc(Id)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          const tempComments = [];
          for (let doc of snapshot.docs) {
            tempComments.unshift(doc.data());
          }
          setComments(tempComments);
        });

      setPostModal(true);
    }
  }, [Id]);

  useEffect(() => {
    if (history.location.pathname === "/") history.replace("/home");
  }, []);

  useEffect(() => {}, [Id]);

  return (
    <>
      <>
        <Snackbar
          open={open}
          anchorOrigin={{
            vertical: "center",
            horizontal: "top",
          }}
          //message="Login or Signup to post and comment!"
        >
          <SnackbarContent
            style={{
              backgroundColor: "teal",
            }}
            message={<h2>Login or Signup to post and comment!</h2>}
          />
        </Snackbar>
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            postId={id}
            user={user}
            username={post.username}
            imageUrl={post.imageUrl}
            caption={post.caption}
            setId={setId}
          />
        ))}
      </>
      {postModal ? (
        <PostModal
          setId = {setId}
          postComment={postComment}
          comments={comments}
          setPostModal={setPostModal}
          postModal = {postModal}
          postData={postData}
          user={user}
        />
      ) : null}

      {posts.map(({ id, post }) => (
        <Post
          setId={setId}
          key={id}
          postId={id}
          user={user}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </>
  );
}

export default Homepage;
