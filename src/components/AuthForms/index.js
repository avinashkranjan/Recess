import React, { useState, useEffect } from "react";

import Logo from "../../assets/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Modal, Button } from "@material-ui/core";

import { auth, GoogleAuthProvider,FacebookAuthProvider } from "../../firebase";
import GoogleButton from "react-google-button";
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from "./style";

const useStyles = makeStyles(styles);

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const facebookSignIn = (event) =>{
  auth
  .signInWithPopup(FacebookAuthProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    var user = result.user;

    var accessToken = credential.accessToken;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

  }

function SignUpForm({ openSignUp, setOpenSignUp }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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

    setOpenSignUp(false);
  };
  const googleSignIn = (event) => {
    auth
      .signInWithPopup(GoogleAuthProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;
        var user = result.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
    setOpenSignUp(false);
  };
 
  const facebookSignUp=(event)=>{
    facebookSignIn();
    setOpenSignUp(false);
  }

  return (
    <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
      <div style={modalStyle} className={classes.auth}>
        <form noValidate autoComplete="off">
          <center>
            <img src={Logo} alt="logo" />
          </center>
          <br />
          <TextField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="filled"
            color="primary"
            className={classes.field}
          />{" "}
          <br />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            color="primary"
            className={classes.field}
          />{" "}
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            color="primary"
            className={classes.field}
          />{" "}
          <br />
          <Button
            type="submit"
            onClick={signUp}
            variant="contained"
            color="primary"
            className={classes.loginButton}
        
          >
            Sign Up
          </Button>
        </form>
        <h3 className={classes.orSpan}>
          <span>OR</span>
        </h3>

        <GoogleButton
          onClick={() => googleSignIn()}
          variant="contained"
          color="primary"
          className={classes.googleButton}
        
        />
                <br/>
          <Button
            type="submit"
            onClick={() => facebookSignUp()}
            variant="contained"
            color="primary"
            className={classes.facebookButton}

          >
            <FacebookIcon color="secondary" /> Sign in with Facebook
          </Button>
      </div>
    </Modal>
  );
}

const SignInForm = ({ openSignIn, setOpenSignIn }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
  };
  const googleSignIn = (event) => {
    auth
      .signInWithPopup(GoogleAuthProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;
        var user = result.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
    setOpenSignIn(false);
  };
  const facebookSignUp=(event)=>{
    facebookSignIn();
    setOpenSignIn(false);
  }
  
  return (
    <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
      <div style={modalStyle} className={classes.auth}>
        <form noValidate autoComplete="off">
          <center>
            <img src={Logo} alt="logo" />
          </center>
          <br />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            color="primary"
            className={classes.field}
          />{" "}
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            color="primary"
            className={classes.field}
          />{" "}
          <br />
          <Button
            type="submit"
            onClick={signIn}
            variant="contained"
            color="primary"
            className={classes.loginButton}

          >
            Sign In
          </Button>
        </form>
        <h3 className={classes.orSpan}>
          <span>OR</span>
        </h3>

        <GoogleButton
          onClick={() => googleSignIn()}
          variant="contained"
          color="primary"
          className={classes.googleButton}
      
        />
      <br/>
      <Button
            type="submit"
            onClick={() => facebookSignUp()}
            variant="contained"
            color="primary"
            className={classes.facebookButton}
          >
            <FacebookIcon color="secondary" /> Sign in with Facebook
          </Button>


      </div>
    </Modal>
  );
};

export { SignInForm, SignUpForm };
