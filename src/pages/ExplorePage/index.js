import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./style.js";

const useStyles = makeStyles(styles);
function Explorepage() {
  const classes = useStyles();

  return <div className={classes.explorePage}>This is the explore page</div>;
}

export default Explorepage;
