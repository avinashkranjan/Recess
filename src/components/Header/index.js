import React from "react";

import { Grid, Hidden, IconButton, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WbSunnyRounded, Brightness2Rounded } from "@material-ui/icons";

import styles from "./style";

import Logo from "../../assets/logo.png";
import ContractedLogo from "../../assets/contracted-logo.png";

const useStyles = makeStyles(styles);

function Header({ isLightTheme, setIsLightTheme }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={1} sm={4}>
          <Hidden xsDown>
            <img src={Logo} alt="branding-logo" />
          </Hidden>
          <Hidden smUp>
            <img src={ContractedLogo} alt="branding-logo" />
          </Hidden>
        </Grid>
        <Grid container item xs={11} sm={8} className={classes.pageHeader}>
          <Grid container item xs={9} sm={11} alignItems="center">
            <span className={classes.pageTitle}>Home</span>
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
              <Avatar src="" alt="User" className={classes.userPhoto} />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
