import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class ToDoBody extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className={`todo__body`}>
        <ul className="todo__list">
          {this.props.todos.map((item) => {
            return (
              <ListItem
                item={item}
                id={item.id}
                statusUpgrade={this.props.statusUpgrade}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoBody;
