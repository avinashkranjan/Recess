import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Snackbar, SnackbarContent } from '@material-ui/core';


import Post from "../../components/Post";

function Homepage({ posts, user }) {
  const history = useHistory();
  const [open, setOpen] = useState(true);

  useEffect(() =>{
    setTimeout(()=>{
     setOpen(false)
    }, 5000)

  }, [])

  useEffect(() => {
    if (history.location.pathname === "/") history.replace("/home");
  }, []);

  return (
    <> 
      <Snackbar 
        open={open}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'top',
          }}
          //message="Login or Signup to post and comment!"
      >
      <SnackbarContent style={{
            backgroundColor:'teal',
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
        />
      ))}
    </>
  );
}

export default Homepage;
