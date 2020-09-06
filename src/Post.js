import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "./firebase";
import Avatar from "@material-ui/core/Avatar";

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      username:
      text: comment
    })
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="Avinash" src="" />
        <h3>{username}</h3>
        {/* Header --> avatar + username */}
      </div>

      <img className="post__image" src={imageUrl} alt="PostImage" />

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong> {comment.username} </strong> {comment.text}
          </p>
        ))}
      </div>

      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          type="submit"
          disabled={!comment}
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
