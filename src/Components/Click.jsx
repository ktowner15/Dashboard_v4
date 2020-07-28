import React, { Component } from "react";
import e_table from "../Resources/env_table";

class Click extends Component {
  // Note: this function is not used, rn
  getClickTable() {
    console.log(e_table.apps[this.props.id]);
    return e_table.apps[this.props.id];
  }

  getMappedElements() {
    const {
      match: { params }
    } = this.props;

    const items = [];

    // e_table.apps[this.props.id].list.forEach(element => {
    //   items.push(<li>{element.name}</li>);
    // });

    e_table.apps.forEach(element => {
      if (element.appName === params.title) {
        element.list.forEach(element2 => {
          items.push(<li>{element2.name}</li>);
        });
      }
    });

    // console.log(this);

    return <ul>{items}</ul>;
  }

  render() {
    return (
      <div>
        <div>This is a heading</div>
        <div>This page's title: {this.props.title}</div>
        <div>This page's id: {this.props.id}</div>
        {/* THIS WORKS */}
        {/* {console.log(e_table.apps[0])} */}

        {/* THIS WORKS */}
        {/* {e_table.apps[0].list[0].name} */}

        {/* THIS WORKS (Click is at location 0 in the JS array, so that's its id.*/}
        {/* <h1>{console.log(e_table.apps[this.props.id].appName)}</h1>
        {e_table.apps[this.props.id].list.forEach(element => {
          console.log(element.name);
        })} */}

        <div>
          {/* DONE: Attempting to get the elements displayed on the page using map() */}
          {/* This does throw a warning that the elements don't have unique keys assigned to them.  Unsure how to modify function to accomodate. */}
          {this.getMappedElements()}
        </div>
      </div>
    );
  }
}

export default Click;
