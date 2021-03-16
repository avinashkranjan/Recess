import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/HomePage";
import "./App.css";
import { lightTheme, darkTheme, createMuiTheme, ThemeProvider } from "./theme";
import { Container, CssBaseline } from "@material-ui/core";

function App() {
  const [windowResized, setWindowResized] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
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
      // window.location.reload();
      setTimeout(() => setWindowResized(!windowResized), 750);
    });
  }, []);
  return (
    <ThemeProvider
      theme={createMuiTheme(isLightTheme ? lightTheme : darkTheme)}
      windowResized={windowResized}
    >
      <CssBaseline />
      <Container maxWidth="md" disableGutters={true}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/home"
              component={() => (
                <Homepage
                  windowResized={windowResized}
                  isLightTheme={isLightTheme}
                  setIsLightTheme={setIsLightTheme}
                />
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
