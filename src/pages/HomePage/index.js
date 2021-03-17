import React from "react";
import Post from "../../components/Post";

function Homepage({ posts, user }) {
  return (
    <>
      {posts.map(({ id, post }) => (
        <Post
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
