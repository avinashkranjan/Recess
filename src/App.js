import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import './App.css'
import Signup from "./pages/Signup";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Homepage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
