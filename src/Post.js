import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
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
    </div>
  );
}

export default Post;
