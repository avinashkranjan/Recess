import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import Logo from "../assets/logo.png";
import Post from "../Post";
import ImageUpload from "../ImageUpload";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import InstagramEmbed from "react-instagram-embed";
import './Homepage.css';
import Signup from './Signup';
import Login from './Login';

import Footer from "./Footer";
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    })
  );

function Homepage(props) {

const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // User Logged In ...
            console.log(authUser);
            setUser(authUser);
          } else {
            //user Logged Out ...
            setUser(null);
          }
        });
        return () => {
          unsubscribe();
        };
      }, [user, username]);
    
      useEffect(() => {
        db.collection("posts")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data(),
              }))
            );
          });
      }, []);
    
      const signUp = (event) => {
        event.preventDefault();
    
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            return authUser.user.updateProfile({
              displayName: username,
            });
          })
          .catch((error) => alert(error.message));
    
        setOpen(false);
      };
    
      const signIn = (event) => {
        event.preventDefault();
    
        auth
          .signInWithEmailAndPassword(email, password)
          .catch((error) => alert(error.message));
    
        setOpenSignIn(false);
      };

    return (
        <>
            <div className="app__header">
                <img className="app__headerImage" src={Logo} alt="logo" />

                {user ? (
                <Button
                    onClick={() => auth.signOut()}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                >
                    Logout
                </Button>
                ) : (
                <div className="app__loginContainer">
                    <Button
                    onClick={() => window.location.href='/login'}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    >
                    Sign In
                    </Button>
                    <Button
                    onClick={() => window.location.href='/signup'}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    >
                    Sign Up
                    </Button>
                </div>
                )}
            </div>

            <div className="app__posts">
                <div className="app__postsLeft">
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
                </div>
                <div className="app__postsRight">
                <InstagramEmbed
                    url="https://www.instagram.com/p/CEmWM21A3wB/"
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName="div"
                    protocol=""
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />
                </div>
                
            </div>
                  
            {user?.displayName ? (
                <ImageUpload username={user.displayName} />
            ) : (
                <h3 className="login__val">You need to Login to Upload</h3>
            )}
            <Footer/>
        </>
    )
}

export default Homepage
