import React, { Component } from "react";
import "./ToDoFooter.scss";

class ToDoFooter extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  handleAllChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(`${e.target.name} ${e.target.value}`);
  };
  render() {
    return (
      <div className={`todo__footer`}>
        <label htmlFor="newTask" className={"todo__sub"}>
          Type the task, then press "Enter" key to add new task in To Do list.
        </label>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="todo__input-block"
        >
          <input
            id={`newTask`}
            type="text"
            className={"todo__input"}
            value={this.state.inputValue}
            onChange={this.handleAllChanges}
            name={"inputValue"}
            // onKeyDown={(e) => {
            //   console.log(this.state.inputValue);
            //   if (e.key === "Enter") {
            //     this.props.addNewTask(e.target.value);
            //     e.target.value = "";
            //   }
            // }}
          />
          <button
            className={"todo__button"}
            onClick={() =>
              this.props.addNewTask(
                this.state.inputValue,
                this.state.secondInputValue
              )
            }
          >
            GO!
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoFooter;
