import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, IconButton, Grid, Hidden, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  HomeRounded,
  AddCircleRounded,
  ExploreRounded,
  AccountCircleRounded,
  ExitToAppRounded,
} from "@material-ui/icons";

import styles from "./style";
import { lightTheme, darkTheme } from "../../theme";
import { auth } from "../../firebase";

const useStyles = makeStyles(styles);
function Sidebar({
  user,
  isLightTheme,
  setIsLightTheme,
  setOpenSignIn,
  setOpenSignUp,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [pageSelected, setPageSelected] = useState({
    home: false,
    upload: false,
    explore: false,
    profile: false,
  });

  const getSelectedStyle = (selected) => {
    if (isLightTheme)
      return selected
        ? lightTheme.palette.text.primary
        : lightTheme.palette.text.secondary;
    else
      return selected
        ? darkTheme.palette.text.primary
        : darkTheme.palette.text.secondary;
  };

  const setSelected = () => {
    const tempSelected = pageSelected;
    for (let i in tempSelected) tempSelected[i] = false;

    switch (window.location.pathname) {
      case "/home":
        tempSelected.home = true;
        break;
      case "/upload":
        tempSelected.upload = true;
        break;
      case "/explore":
        tempSelected.explore = true;
        break;
      case "/profile":
        tempSelected.profile = true;
        break;
      default:
        console.log("404");
    }
    setPageSelected({ ...tempSelected });
  };

  useEffect(() => {
    setSelected();
    return history.listen(() => {
      setSelected();
    });
  }, []);

  return (
    <Grid item xs={0} sm={4} className={classes.sidebar}>
      <Hidden xsDown>
        <div
          className={classes.navLinks}
          style={{ height: window.innerHeight - 110 }}
        >
          <Link
            to="/home"
            className={classes.link}
            style={{ color: getSelectedStyle(pageSelected.home) }}
          >
            <HomeRounded />
            <span>Home</span>
          </Link>

          {user?.displayName ? (
            <Link
              to="/upload"
              className={classes.link}
              style={{ color: getSelectedStyle(pageSelected.upload) }}
            >
              <AddCircleRounded />
              <span>Upload</span>
            </Link>
          ) : null}

          <Link
            to="/explore"
            className={classes.link}
            style={{ color: getSelectedStyle(pageSelected.explore) }}
          >
            <ExploreRounded />
            <span>Explore</span>
          </Link>

          {user?.displayName ? (
            <Link
              to="/profile"
              className={classes.link}
              style={{ color: getSelectedStyle(pageSelected.profile) }}
            >
              <AccountCircleRounded />
              <span>Profile</span>
            </Link>
          ) : null}
        </div>

        {user?.displayName ? (
          <div className={classes.account}>
            <Avatar src="" alt="User" className={classes.userPhoto} />
            <span className={classes.username}>{user?.displayName}</span>
            <IconButton
              className={classes.logOutBtn}
              onClick={() => auth.signOut()}
            >
              <ExitToAppRounded color="error" className={classes.logOutIcon} />
            </IconButton>
          </div>
        ) : (
          <div className={classes.authBox}>
            <Button
              className={classes.signInBtn}
              onClick={() => setOpenSignIn(true)}
            >
              Sign In
            </Button>
            <Button
              className={classes.signUpBtn}
              onClick={() => setOpenSignUp(true)}
            >
              Sign Up
            </Button>
          </div>
        )}
      </Hidden>
    </Grid>
  );
}

export default Sidebar;
