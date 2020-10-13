import React from 'react';
import './App.css';
import HeaderMain from './components/Home/HeaderMain/HeaderMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderMain />
        </Route>
        <Route path="/login">
          <Login />
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
