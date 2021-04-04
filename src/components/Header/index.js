import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../../firebase";

import {
  Grid,
  Hidden,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  WbSunnyRounded,
  Brightness2Rounded,
  DonutLargeRounded,
} from "@material-ui/icons";

import styles from "./style";

import Logo from "../../assets/logo.png";
import ContractedLogo from "../../assets/contracted-logo.png";

const useStyles = makeStyles(styles);

function Header({
  isLightTheme,
  setIsLightTheme,
  setOpenSignIn,
  setOpenSignUp,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [pageName, setPageName] = useState("Home");
  const [noAuthMenu, setNoAuthMenu] = useState(null);
  const [authMenu, setAuthMenu] = useState(null);
  const [user, setUser] = useState(null);

  const openNoAuthMenu = (e) => {
    setNoAuthMenu(e.currentTarget);
  };

  const closeNoAuthMenu = () => {
    setNoAuthMenu(null);
  };

  const openAuthMenu = (e) => {
    setAuthMenu(e.currentTarget);
  };

  const closeAuthMenu = () => {
    setAuthMenu(null);
  };

  useEffect(() => {
    const pageNamer = () => {
      let tempPageName = "",
        pathname = window.location.pathname + "/",
        mainPath = pathname.substring(1, pathname.indexOf("/", 1));

      tempPageName = mainPath.charAt(0).toUpperCase() + mainPath.substring(1);

      console.log(window.location);
      setPageName(tempPageName);
    };

    pageNamer();
    history.listen(pageNamer);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User Logged In ...
        setUser(authUser);
      } else {
        //user Logged Out ...
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={authMenu}
        keepMounted
        open={Boolean(authMenu)}
        onClose={closeAuthMenu}
      >
        <MenuItem
          onClick={() => {
            closeAuthMenu();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            auth.signOut();
            closeAuthMenu();
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>

      <Menu
        id="simple-menu"
        anchorEl={noAuthMenu}
        keepMounted
        open={Boolean(noAuthMenu)}
        onClose={closeNoAuthMenu}
      >
        <MenuItem
          onClick={() => {
            setOpenSignIn(true);
            closeNoAuthMenu();
          }}
        >
          Sign In
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenSignUp(true);
            closeNoAuthMenu();
          }}
        >
          Sign Up
        </MenuItem>
      </Menu>

      <div className={classes.root}>
        <Grid container>
          <Grid container item xs={1} sm={4}>
            <Link to="/">
              <Hidden xsDown>
                <img src={Logo} alt="branding-logo" />
              </Hidden>
              <Hidden smUp>
                <img src={ContractedLogo} alt="branding-logo" />
              </Hidden>
            </Link>
          </Grid>
          <Grid container item xs={11} sm={8} className={classes.pageHeader}>
            <Grid container item xs={9} sm={11} alignItems="center">
              <span className={classes.pageTitle}>{pageName}</span>
            </Grid>
            <Grid container item xs={2} sm={1}>
              <IconButton
                className={classes.themeChanger}
                color="primary"
                onClick={() => setIsLightTheme(!isLightTheme)}
              >
                {isLightTheme && <Brightness2Rounded />}
                {!isLightTheme && <WbSunnyRounded />}
              </IconButton>
            </Grid>
            <Grid container item xs={1}>
              <Hidden smUp>
                {user?.displayName && (
                  <Avatar
                    src=""
                    alt="User"
                    className={classes.userPhoto}
                    onClick={openAuthMenu}
                  />
                )}
                {!user?.displayName && (
                  <IconButton color="primary" onClick={openNoAuthMenu}>
                    <DonutLargeRounded />
                  </IconButton>
                )}
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Header;
