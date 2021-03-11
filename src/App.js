
import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import Logo from "./assets/logo.png";
import "./App.css";
import HeaderOption from './HeaderOption'
import Post from "./Post";
import ImageUpload from "./ImageUpload";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import InstagramEmbed from "react-instagram-embed";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import Sidebar from './Sidebar'


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
=======
import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import './App.css'


function App() {

  return (
    <div className="app">

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
              Sign In
            </Button>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Sign Up
            </Button>
          </div>
        )}
        <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1614417530~hmac=8993d58cb66c325402997d0158282220" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>

                </div>

            </div>
        <div className="header__right">
                <HeaderOption Icon={HomeIcon} title ="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="Friends"/>
                <HeaderOption Icon={BusinessCenterIcon} title ="Opportunities"/>
                <HeaderOption Icon={ChatIcon} title ="Chat"/>
                <HeaderOption Icon={NotificationsIcon} title ="Notifications"/>
                <HeaderOption avatar="https://www.eirim.ie/eirim2017/wp-content/uploads/2016/09/dummy-profile-pic.jpg" title='me'/>

            </div>
      </div>
      <Sidebar/>
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

      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Homepage}/>
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
