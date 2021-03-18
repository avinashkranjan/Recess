import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
