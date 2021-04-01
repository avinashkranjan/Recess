import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/profile" component={Homepage} />
          <Route exact path="/upload" component={Homepage} />
          <Route exact path="/notfound" component={Homepage} />
          <Route exact path="/underdev" component={Homepage} />
          <Redirect to="/notfound" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
