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
      button:{
        marginRight: 8,
        

      },
    })
  );

function Homepage() {

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
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                {/* <form className="app__signup">
                    <center>
                    <img className="app__headerImage" src={Logo} alt="logo" />
                    </center> */}

                <form className="app__signup" noValidate autoComplete="off">
                    <center>
                    <img className="app__headerImage" src={Logo} alt="logo" />
                    </center>
                    <br />
                    <TextField
                    id="username"
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                    />{" "}
                    <br />
                    <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    />{" "}
                    <br />
                    <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    />{" "}
                    <br />
                    <Button
                    type="submit"
                    onClick={signUp}
                    variant="contained"
                    color="primary"
                    className="login__button"
                    >
                    Sign Up
                    </Button>
                </form>
                </div>
            </Modal>

            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <div style={modalStyle} className={classes.paper}>
                <form className="app__signup" noValidate autoComplete="off">
                    <center>
                    <img className="app__headerImage" src={Logo} alt="logo" />
                    </center>
                    <br />
                    <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    />{" "}
                    <br />
                    <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    />{" "}
                    <br />
                    <Button
                    type="submit"
                    onClick={signIn}
                    variant="contained"
                    color="primary"
                    className="login__button"
                    >
                    Sign In
                    </Button>
                </form>
                </div>
            </Modal>
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
                    onClick={() => setOpenSignIn(true)}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    >
                    LOGIN
                    </Button>
                    <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    >
                    SIGN UP
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
        </>
    )
}

export default Homepage
