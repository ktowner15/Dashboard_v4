import React, { Component } from "react";
import "./Entry.css";
import infoPage from "../rawHTML/infoPage.html";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.props.history.push("/click");
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
