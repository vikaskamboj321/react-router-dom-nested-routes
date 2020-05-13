import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Application from "./services/application";
import Designing from "./services/designing";
import Development from "./services/development";
import Seo from "./services/seo";

const Services = () => {
  return (
    <div className="Services">
      <h1>Services</h1>
      <ul>
        <li>
          <Link to="/services/designing">Website Designing</Link>
        </li>
        <li>
          <Link to="/services/development">Web App Development</Link>
        </li>
        <li>
          <Link to="/services/application">Mobile App Development</Link>
        </li>
        <li>
          <Link to="/services/seo">Social Media Marketing</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/services/application" component={Application} />
        <Route exact path="/services/designing" component={Designing} />
        <Route exact path="/services/development" component={Development} />
        <Route exact path="/services/seo" component={Seo} />
      </Switch>
    </div>
  );
};

export default Services;
