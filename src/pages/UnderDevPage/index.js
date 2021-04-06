import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./style";

import underDevArt from "../../assets/under-dev-art.png";

const useStyles = makeStyles(styles);
function Underdevpage() {
  const classes = useStyles();
  return (
    <div className={classes.underDevPage}>
      <h1 className={classes.pageTitle}>Under Development</h1>
      <img
        src={underDevArt}
        alt="under development art"
        className={classes.underDevArt}
      />
      <span className={classes.underDevText}>
        We are extremely sorry for the inconvenience <br />
        But the page you’re looking for is under development.
      </span>
    </div>
  );
}

export default Underdevpage;
