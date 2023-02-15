import React, { Component } from "react";
import "./ToDoFooter.scss";

class ToDoFooter extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this)
  }
handleChange(event){
    this.setState({
      inputValue: event.target.value
    })
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
            onChange={e => this.handleChange(e)}
            onKeyDown={(e) => {
              console.log(this.state.inputValue);
              if (e.key === "Enter") {
                this.props.addNewTask(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <button className={"todo__button"} onClick={()=>this.props.addNewTask(this.state.inputValue)}>GO!</button>
        </div>
      </div>
    );
  }
}

export default ToDoFooter;
