import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./style.js";

import notFoundArt from "../../assets/not-found-art.png";

const useStyles = makeStyles(styles);
function Notfoundpage() {
  const classes = useStyles();
  return (
    <div className={classes.notFoundPage}>
      <h1 className={classes.pageTitle}>Not Found!</h1>
      <img
        src={notFoundArt}
        alt="not found art"
        className={classes.notFoundArt}
      />
      <span className={classes.notFoundText}>
        We are extremely sorry for the inconvenience
        <br /> But the page you’re looking for wasn’t found.
      </span>
    </div>
  );
}

export default Notfoundpage;
