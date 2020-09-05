import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Logo from "./assets/logo.png";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="logo" />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
