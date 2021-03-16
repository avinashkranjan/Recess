import React, { useEffect, useState } from "react";

import styles from "./style";
import {
  IconButton,
  Hidden,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import {
  WbSunnyRounded,
  Brightness2Rounded,
  HomeRounded,
  AddCircleRounded,
  ExploreRounded,
  AccountCircleRounded,
  ExitToAppRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function Footer() {
  const classes = useStyles();
  const [value, setValue] = useState("home");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // console.log(window.location.pathname.substring(1));
    setValue(window.location.pathname.substring(1));
  }, [window.location.href]);

  return (
    <Hidden smUp>
      <div className={classes.footer}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeRounded />}
          />
          <BottomNavigationAction
            label="Upload"
            value="upload"
            icon={<AddCircleRounded />}
          />
          <BottomNavigationAction
            label="Explore"
            value="explore"
            icon={<ExploreRounded />}
          />
        </BottomNavigation>
      </div>
    </Hidden>
  );
}

export default Footer;
