import React, { Component } from "react";
import Link from "react-router-dom";
import $ from "jquery";
import "./Entry.css";
// import infoPage from "../rawHTML/infoPage.html";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";

class Entry extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    //Was trying to mess around with the 'super' object here, but ran into same issue as before.  Passing props into the Entry obj seems like the only way to do what we want.
    var x = super(props);
    if (x === this) {
      console.log(x);
    }

    this.state = { context: props.context };
    this.buttonClicked = this.buttonClicked.bind(this);

    // x.props.history.push("");
  }

  // FIXME: trying to get the ':title' portion of the URL in RouteController (see the Route element for Click)
  buttonClicked() {
    // this.props.history.push("/"+this.props.title);
    // if(this.props.history != null){

    //FIXME: was experimenting with JQuery here in order to find the ':title" of the Route component in RouteController
    // var id = $(this).parent().parent().attr('id');
    // console.log(id)
    // const id = findDOMNode(this.refs.Click);
    // console.log(id);

    //FIXME: this is what we had before
    this.props.history.push("/Click");

    // this.context.history.push("/click");
    // }
    // else{
    //   window.history.push(env_table);
    // }
  }

  render() {
    return (
      <div className="Entry">
        <dt>
          <span className="tile" role="img" aria-label="Click" />
          <span> Click </span>
        </dt>
        <dd>FSE</dd>
        <dd>
          <button className=" button" onClick={this.buttonClicked}>
            Environments
          </button>
        </dd>
      </div>
    );
  }
}

export default Entry;
