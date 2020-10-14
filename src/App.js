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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reviews from './components/Dashboard/Reviews/Reviews';
import AllService from './components/AdminPanel/AllService/AllService';
import AddService from './components/AdminPanel/AddService/AddService';
import MakeAdmin from './components/AdminPanel/MakeAdmin/MakeAdmin';

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
          <PrivateRoute path="/orders/:id">
            <Orders />
          </PrivateRoute>    
          <PrivateRoute path="/serviceList">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <Reviews />
          </PrivateRoute>  
          <PrivateRoute path="/allService">
            <AllService />
          </PrivateRoute>  
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>  
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
