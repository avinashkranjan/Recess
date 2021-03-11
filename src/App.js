import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import './App.css'
import { ToastProvider } from "react-toast-notifications";

function App() {

  return (
    <div className="app">
      <ToastProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Homepage}/>
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>
      </ToastProvider>
    </div>
  );
}

export default App;
