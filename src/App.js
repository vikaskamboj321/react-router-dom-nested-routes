import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Services from "./components/pages/services";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/user/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="clearfix">
          <Sidebar />
          <div className="contentArea">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/user" component={Dashboard} />
              <Route
                render={() => {
                  return (
                    <h1 className="text-center">
                      404
                      <br />
                      Not Found
                    </h1>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
