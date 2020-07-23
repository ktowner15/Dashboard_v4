import React, { Component } from "react";
import "./styles.css";
import Entry from "./Components/Play/Entry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Click from "./Components/Click";

class RouteController extends Component {
  render() {
    return (
      <div className="RouteController">
        {/* The always-visible JSX/HTML is declared here, as well as RouterController links. Examples below:*/}
        <Router>
          <Switch>
            <Route path="/click" component={Click} />
            <Route path="/dashboard" component={Entry} />
            <Route path="/" exact component={Entry} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>Check the resource path. Contact help desk</div>;
}

export default RouteController;
