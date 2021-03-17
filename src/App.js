import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { db, auth } from "./firebase";
import Homepage from "./pages/HomePage";
import Uploadpage from "./pages/UploadPage";
import { lightTheme, darkTheme, createMuiTheme, ThemeProvider } from "./theme";

import Header from "./components/Header";
import { SignInForm, SignUpForm } from "./components/AuthForms";
import BottomNavBar from "./components/BottomNavBar";
import Sidebar from "./components/Sidebar";

import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Grid } from "@material-ui/core";

import styles from "./style";

const useStyles = makeStyles(styles);
function Content({ isLightTheme, setIsLightTheme }) {
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
    console.log(darkTheme);
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
    return window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, []);

  return (
    <>
      <CssBaseline />

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

                <Route exact path="/upload" component={() => <Uploadpage />} />

                <Redirect to="/home" />
              </Switch>
            </Grid>
          </Grid>

          <BottomNavBar user={user} />
        </Container>
      </BrowserRouter>
    </>
  );
}

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  return (
    <ThemeProvider
      theme={createMuiTheme(isLightTheme ? lightTheme : darkTheme)}
    >
      <Content isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
    </ThemeProvider>
  );
}

export default App;
