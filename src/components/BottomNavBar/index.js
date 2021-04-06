import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./style";
import {
  Hidden,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import {
  HomeRounded,
  AddCircleRounded,
  ExploreRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { darkTheme, createMuiTheme, ThemeProvider } from "../../theme";

const useStyles = makeStyles(styles);

function BottomNavBar({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("home");

  const handleChange = (e, newValue) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  useEffect(() => {
    setValue(window.location.pathname.substring(1));
    return history.listen(() => {
      setValue(window.location.pathname.substring(1));
    });
  }, []);

  return (
    <Hidden smUp>
      <div className={classes.footer}>
        <ThemeProvider theme={createMuiTheme(darkTheme)}>
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
            {user?.displayName && (
              <BottomNavigationAction
                label="Upload"
                value="upload"
                icon={<AddCircleRounded />}
              />
            )}
            <BottomNavigationAction
              label="Explore"
              value="explore"
              icon={<ExploreRounded />}
            />
          </BottomNavigation>
        </ThemeProvider>
      </div>
    </Hidden>
  );
}

export default BottomNavBar;
