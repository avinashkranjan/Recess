import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.js";
import { db } from "../../firebase";
import firebase from "firebase";
import Post from "../../components/Post";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, SnackbarContent } from "@material-ui/core";

const useStyles = makeStyles(styles);

function Homepage({ posts, user }) {
  const classes = useStyles();
  const history = useHistory();
  const [Id, setId] = useState("");
  const [modalExp, setModal] = useState(false);
  const [value, setValue] = useState({});
  const [isVal, setIsVal] = useState(false);
  const [modalComments, setModalComments] = useState([]);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(!user);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(Id).collection("comments").add({
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(user);
    }, 5000);
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (Id) {
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
          setModalComments(tempComments);
        });
    }
    setModal(true);
  }, [Id]);

  useEffect(() => {
    if (history.location.pathname === "/") history.replace("/home");
  }, []);

  useEffect(() => {
    posts.forEach((post) => {
      if (post.id === Id) {
        console.log(Id + " " + post.id);
        setValue((prev) => ({ ...prev, ...post }));
        setIsVal(true);
      }
    });
  }, [Id]);

  return (
    <>
      {/* Login warning */}
      {!user && (
        <Snackbar
          open={open}
          anchorOrigin={{
            vertical: "center",
            horizontal: "top",
          }}
        >
          <SnackbarContent
            style={{
              backgroundColor: "teal",
            }}
            message={<h2>Login or Signup to post and comment!</h2>}
          />
        </Snackbar>
      )}

      {/* // Displaying all posts */}
      {posts.map(({ id, post }) => (
        <Post
          setId={setId}
          key={id}
          postId={id}
          user={user}
          username={post.username}
          imageUrl={post.imageUrl}
          avatarURL={post.avatarURL}
          caption={post.caption}
        />
      ))}

      {/* // Modal for View all comments */}
      {isVal && (
        <Modal className={classes.modal} open={modalExp}>
          <div className={classes.modalContainer}>
            <div className={classes.modalHeader}>
              <h1 className={classes.modalUsername}>{value.post.username}</h1>
              <h1
                className={classes.closeModal}
                onClick={() => setModal(false)}
              >
                ✖
              </h1>
            </div>
            <div className={classes.modalMain}>
              <div className={classes.postImageHolder}>
                <div className={classes.postImageContainer}>
                  <img
                    src={value.post.imageUrl}
                    className={classes.postImage}
                  />
                </div>
              </div>

              <aside className={classes.commentContainer}>
                <div className={classes.postedComments}>
                  {modalComments &&
                    modalComments.map((comment, index) => (
                      <p key={`comment-index-${index}`}>
                        <strong> {comment.username} </strong> <br></br>
                        {comment.text}
                      </p>
                    ))}
                </div>
                <div className={classes.postCommentsContainer}>
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
                </div>
              </aside>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Homepage;
