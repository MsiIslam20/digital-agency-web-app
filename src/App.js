import React, { createContext, useState } from 'react';
import './App.css';
import HeaderMain from './components/Home/HeaderMain/HeaderMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
    </UserContext.Provider>
  );
}

export default App;
