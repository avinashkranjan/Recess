import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import "./App.css";

import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="md" disableGutters={true}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
