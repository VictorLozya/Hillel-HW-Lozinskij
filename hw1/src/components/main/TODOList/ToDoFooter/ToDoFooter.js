import React, { Component } from "react";

class ToDoFooter extends Component {
  render() {
    return (
      <div className={`todo__footer`}>
        <label htmlFor="newTask">
          Type the task, then press "Enter" key to add new task in To Do list
        </label>
        <input
          id={`newTask`}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.props.addNewTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    );
  }
}

export default ToDoFooter;
