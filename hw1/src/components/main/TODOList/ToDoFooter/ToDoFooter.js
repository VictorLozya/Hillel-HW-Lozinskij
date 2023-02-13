import React, { Component } from "react";

class ToDoFooter extends Component {
  render() {
    return (
      <div className={`todo__footer`}>
        <input type="text" />
        <button>ADD</button>
      </div>
    );
  }
}

export default ToDoFooter;
