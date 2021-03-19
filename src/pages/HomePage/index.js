import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Post from "../../components/Post";

function Homepage({ posts, user }) {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/") history.replace("/home");
  }, []);

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
