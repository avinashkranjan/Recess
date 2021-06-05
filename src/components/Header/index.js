import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../../firebase";
import ReactAnime from "react-animejs";

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
  const { Anime, stagger } = ReactAnime;
  const [moonPath] = useState(
    "M15 27.5C15.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15.5 12.3122 15.5 27.5Z"
  );
  const [sunPath] = useState(
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5  0C42.6878 0 55 12.3122 55 27.5Z"
  );

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

  let svgMorphing = () => {
    setIsLightTheme(!isLightTheme);
    localStorage["lightThemeStatus"] = !isLightTheme;
  };

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
						localStorage?.removeItem("lightThemeStatus");
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
							{/* 
              Place Where code should be applied
              */}
							{/* <IconButton
                className={classes.themeChanger}
                color="primary"
                onClick={() => {setIsLightTheme(!isLightTheme); localStorage['lightThemeStatus'] = !isLightTheme}}
              >
                {isLightTheme && <Brightness2Rounded />}
                {!isLightTheme && <WbSunnyRounded />}
              </IconButton> */}
							<Anime
								animeConfig={{
									autoplay: false,
									duration: 750,
									easing: "easeOutExpo",
								}}
								initial={[
									{
										targets: ".sun",
										d: [{ value: !isLightTheme ? sunPath : moonPath }],
									},
								]}
								// _onClick={[
								// 	{
								// 		targets: ".sun",
								// 		d: [{ value: isLightTheme ? sunPath : moonPath }],
								// 	},
								// 	{
								// 		targets: "#darkMode",
								// 		rotate: 320,
								// 		delay: 350,
								// 	},
								// 	{
								// 		targets: "section",
								// 		backgroundColor: !isLightTheme
								// 			? "rgb(225,225,225)"
								// 			: "rgb(22,22,22)",
								// 		color: !isLightTheme ? "rgb(22,22,22)" : "rgb(225,225,225)",
								// 		delay: 700,
								// 	},
								// ]}
							>
								<svg
									className={classes.themeChanger}
									id="darkMode"
									width="55"
									height="55"
									viewBox="0 0 55 55"
									color="primary"
									fill="primary"
									onClick={svgMorphing}
								>
									<path class="sun" d={sunPath} fill="#ffd600" />
								</svg>
							</Anime>
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
