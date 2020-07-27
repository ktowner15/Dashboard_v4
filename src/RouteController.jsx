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
            {/* <Route path="/click" component={Click} /> */}

            {/* Trying to pass props through the route here: */}

            {/* I don't think we need this, but comment it back in if necessary */}
            {/* <Route path="/dashboard" component={Entry} /> */}

            {/* TODO: find a way to render additional tiles on the page, and have them redirect an env page that depends on the props specified in the 'entry' object */}
            {/* FIXME: this works if you have  */}

            {/* FIXME: left off here */}
            <div id="Click">
              <Route ref="Click" path="/" exact component={Entry} />
            </div>

            {/* <Route
              path="/"
              exact
              component={() => <Entry title="env2" />}
            /> */}

            {/* but it doesn't work if you change it to include multiple Entries. */}
            {/* <Route path="/" exact component={()=><div>
              <Entry/>
              <Entry/>
            </div>} /> */}

            {/* The following will be routes for each new environment that we add. */}
            {/* 'id' refers to its position within the JS array. */}
            {/* <Route
              path="/:title"
              component={() => <Click title="click" id="0" />}
            /> */}
            {/* <Route
              path="/env2"
              component={() => <Click title="cnv2" id="1" />}
            /> */}
            <Route path="/:title" component={Click} />
            {/* Error component triggers if none of the above routes can be loaded successfully */}
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
