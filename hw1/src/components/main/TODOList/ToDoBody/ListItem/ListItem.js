import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className={`item`}>
        <span className="item__text">{this.props.item.task}</span>
        <input
          type="checkbox"
          defaultChecked={this.props.item.completed}
          onChange={(e) => {
            let value = e.target.checked;
            this.props.statusUpgrade(value, this.props.id);
          }}
        />
        {this.props.item.completed ? (
          <span className={"item__status"}> Done</span>
        ) : (
          <span className={"item__status"}>Uncompleted :(</span>
        )}
      </li>
    );
  }
}

export default ListItem;
