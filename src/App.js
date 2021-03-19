import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Redirect to="/notfound" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
