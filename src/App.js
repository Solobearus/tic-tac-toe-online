import React, { useContext, useState } from 'react';
import './App.css';
import { ContextContext } from './context/ContextContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Login from './components/Login/Login'
import Lobby from './components/Lobby/Lobby'

function App() {
  const { username } = useContext(ContextContext);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {!username ? <Redirect to="/signin" /> : <Lobby />}
          </Route>
          <Route path="/signin">
            {username ? <Redirect to="/" /> : <Login />}
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
