import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login/Login";
import Home from "./components/Home/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllOrders from "./components/AllOrders/AllOrders";
import AddServices from "./components/AddServices/AddServices";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import AddReviews from "./components/AddReviews/AddReviews";
import Order from "./components/CustomerOrders/Order/Order";
import OrderList from "./components/CustomerOrders/OrderList/OrderList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/allOrders">
            <AllOrders></AllOrders>
          </PrivateRoute>

          <Route path="/addReview">
            <AddReviews/>
          </Route>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/AddService">
            <AddServices/>
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin/>
          </Route>

          <PrivateRoute path="/sidebar">
            <Sidebar/>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
