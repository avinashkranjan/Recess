import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/HomePage";
import "./App.css";
import { lightTheme, darkTheme, ThemeProvider } from "./theme";

import { Container } from "@material-ui/core";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  useEffect(() => {
    return window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, []);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Container maxWidth="md" disableGutters={true}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Homepage} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
