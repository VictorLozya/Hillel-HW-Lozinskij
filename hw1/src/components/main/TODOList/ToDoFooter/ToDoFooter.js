import React, { Component } from "react";
import "./ToDoFooter.scss";

class ToDoFooter extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  render() {
    return (
      <div className={`todo__footer`}>
        <label htmlFor="newTask" className={"todo__sub"}>
          Type the task, then press "Enter" key to add new task in To Do list.
        </label>
        <div className="todo__input-block">
          <input
            id={`newTask`}
            type="text"
            className={"todo__input"}
            onKeyDown={(e) => {
              this.setState({
                inputValue: e.target.value,
              });
              if (e.key === "Enter") {
                this.props.addNewTask(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default ToDoFooter;
