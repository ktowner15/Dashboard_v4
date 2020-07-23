import React, { Component } from "react";
import "./Click.css";
import e_table from "../Resources/env_table";

class Click extends Component {
  x() {
    return "Hello";
  }

  getClickTable() {
    console.log(e_table.apps[0]);
    return e_table.apps[0];
  }

  render() {
    return (
      <div>
        <div>This is a heading</div>
        <div>Welcome</div>
        {/* THIS WORKS */}
        {/* {console.log(e_table.apps[0])} */}

        {/* THIS WORKS */}
        {/* {e_table.apps[0].list[0].name} */}

        {/* THIS WORKS */}
        {console.log(e_table.apps[0].appName)}
        {e_table.apps[0].list.forEach((element) => {
          console.log(element.name);
        })}
      </div>
    );
  }
}

export default Click;
