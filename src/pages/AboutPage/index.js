import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./style";

import about from "../../assets/about.png";

const useStyles = makeStyles(styles);
function Explorepage() {
  const classes = useStyles();
  return (
    <div className={classes.underAboutPage}>
      <h1 className={classes.pageTitle}>About Page</h1>
      <img
        src={about}
        alt="about art"
        className={classes.aboutArt}
      />
      <span className={classes.underAboutText}>
        This is about page.<br />
        But the page you’re looking for is under development.
      </span>
    </div>
  );
}

export default Explorepage;
