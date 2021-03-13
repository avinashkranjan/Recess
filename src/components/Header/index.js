import React from "react";

import { Grid, Hidden, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WbSunnyRounded, Brightness2Rounded } from "@material-ui/icons";

import styles from "./style";

import Logo from "../../assets/logo.png";

const useStyles = makeStyles(styles);

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={0} sm={4}>
          <Hidden xsDown>
            <img src={Logo} alt="branding-logo" />
          </Hidden>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.pageHeader}>
          <Grid container item xs={11} alignItems="center">
            <span className={classes.pageTitle}>Home</span>
          </Grid>
          <Grid container item xs={1}>
            <IconButton className={classes.themeChanger}>
              <WbSunnyRounded />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
