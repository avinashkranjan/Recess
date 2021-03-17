import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { db, auth } from "./firebase";
import Homepage from "./pages/HomePage";
import Uploadpage from "./pages/UploadPage";
import "./App.css";
import { lightTheme, darkTheme, createMuiTheme, ThemeProvider } from "./theme";

import Header from "./components/Header";
import { SignInForm, SignUpForm } from "./components/AuthForms";
import BottomNavBar from "./components/BottomNavBar";
import Sidebar from "./components/Sidebar";

import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Grid } from "@material-ui/core";

import styles from "./style";

const useStyles = makeStyles(styles);
function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User Logged In ...
        console.log(authUser);
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

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        const tempPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        setPosts(tempPosts);
      });
  }, []);

  useEffect(() => {
    if (!isLightTheme) {
      document.documentElement.style.setProperty(
        "--primary-app-color",
        "#121823"
      );
      document.documentElement.style.setProperty(
        "--secondary-app-color",
        "#41506B4f"
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary-app-color",
        "#fafafa"
      );
      document.documentElement.style.setProperty(
        "--secondary-app-color",
        "#fff"
      );
    }
    return window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, [isLightTheme]);

  return (
    <ThemeProvider
      theme={createMuiTheme(isLightTheme ? lightTheme : darkTheme)}
    >
      <CssBaseline />

      <>
        <SignUpForm openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} />
        <SignInForm openSignIn={openSignIn} setOpenSignIn={setOpenSignIn} />

        <BrowserRouter>
          <Container maxWidth="md" disableGutters={true}>
            <Header
              isLightTheme={isLightTheme}
              setIsLightTheme={setIsLightTheme}
              setOpenSignIn={setOpenSignIn}
              setOpenSignUp={setOpenSignUp}
            />

            <Grid container className={classes.homeBody} disableGutters={true}>
              <Sidebar
                user={user}
                isLightTheme={isLightTheme}
                setIsLightTheme={setIsLightTheme}
                setOpenSignIn={setOpenSignIn}
                setOpenSignUp={setOpenSignUp}
              />

              <Grid
                container
                item
                xs={12}
                sm={8}
                className={classes.posts}
                style={{
                  height: window.innerHeight - 55,
                }}
              >
                <Switch>
                  <Route
                    exact
                    path="/home"
                    component={() => <Homepage posts={posts} user={user} />}
                  />

                  <Route
                    exact
                    path="/upload"
                    component={() => <Uploadpage />}
                  />

                  <Redirect to="/home" />
                </Switch>
              </Grid>
            </Grid>

            <BottomNavBar user={user} />
          </Container>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
