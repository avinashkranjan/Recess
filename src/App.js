import React, { useState } from "react";
import Logo from "./assets/logo.png";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cleverqazi",
      caption: "Hello world",
      imageUrl: "#",
    },
    {
      username: "cleverqazi",
      caption: "Hello world",
      imageUrl: "#",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="logo" />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
