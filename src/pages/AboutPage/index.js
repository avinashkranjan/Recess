import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./style";

import about from "../../assets/about.png";

const useStyles = makeStyles(styles);
function Explorepage() {
  const classes = useStyles();
  return (
    <div className={classes.underAboutPage}>
      <img
        src={about}
        alt="about art"
        className={classes.aboutArt}
      />
      {/* About Page */}
      <div className={classes.aboutdiv}>
        <h2 className={classes.aboutHeading}>About Recess</h2>
        <p className={classes.aboutText}>
          A Social Media Platform for students to share their experience/knowledge they gained in their free time.
          This platform is created to help students to share their knowledge and experience with other students.

        </p>
      </div>

    </div>
  );
}

export default Explorepage;
