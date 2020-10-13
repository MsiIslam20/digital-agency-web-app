import React, { createContext, useState } from 'react';
import './App.css';
import HeaderMain from './components/Home/HeaderMain/HeaderMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Orders from './components/Dashboard/Orders/Orders';
import ServiceList from './components/Dashboard/serviceList/serviceList';

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
          <Route path="/orders">
            <Orders />
          </Route>    
          <Route path="/serviceList">
            <ServiceList />
          </Route>
          <Route path="/reviews">
            <Orders />
          </Route>                    
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
