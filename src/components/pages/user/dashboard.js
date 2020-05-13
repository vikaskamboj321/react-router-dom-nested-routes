import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./login";
import Register from "./register";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      Dashboard
      <ul>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
        <li>
          <Link to="/user/Register">Register</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/register" component={Register} />
        <Route
          render={() => {
            return <div>Not Found</div>;
          }}
        />
      </Switch>
    </div>
  );
};

export default Dashboard;
