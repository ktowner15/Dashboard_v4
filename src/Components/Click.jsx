import React, { Component } from "react";
import "./Click.css";

class Click extends Component {
  getUsage() {}

  render() {
    return (
      <div>
        {/* infoPage is replaced by this */}
        <button onClick={getUsage()}>Click me for alert</button>
      </div>
    );
  }
}

export default Click;
