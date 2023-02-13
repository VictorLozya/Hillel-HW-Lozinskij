import React, { Component } from "react";
import ToDoBody from "./ToDoBody/ToDoBody";
import ToDoFooter from "./ToDoFooter/ToDoFooter";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          task: "wash dishes",
          completed: false,
        },
        {
          id: 2,
          task: "wash dishes",
          completed: false,
        },
        {
          id: 3,
          task: "wash dishes",
          completed: false,
        },
        {
          id: 4,
          task: "wash dishes",
          completed: false,
        },
        {
          id: 5,
          task: "fix this shit",
          completed: true,
        },
      ],
    };
  }

  statusUpgrade = (newValue, id) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: newValue };
      } else {
        return item;
      }
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className={`todo`}>
        <h2 className="todo__head">Task List</h2>
        <ToDoBody todos={this.state.todos} statusUpgrade={this.statusUpgrade} />
        <ToDoFooter />
      </div>
    );
  }
}

export default ToDoList;
