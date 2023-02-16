import React, { Component } from "react";
import "./ListItem.scss";

class ListItem extends Component {
  render() {
    return (
      <li
        className={
          this.props.item.completed ? "item item__done" : "item item__undone"
        }
      >
        <p className="item__text">{this.props.item.task}</p>
        <p className="item__text">{this.props.item.subtask}</p>

        <div className="item__statuses">
          <input
            className={"item__checkbox"}
            id={`check_${this.props.id}`}
            type="checkbox"
            defaultChecked={this.props.item.completed}
            onChange={(e) => {
              let value = e.target.checked;
              this.props.statusUpgrade(value, this.props.id);
            }}
          />
          {this.props.item.completed ? (
            <label
              htmlFor={`check_${this.props.id}`}
              className={"item__status item__status--done"}
            >
              Done
            </label>
          ) : (
            <label
              htmlFor={`check_${this.props.id}`}
              className={"item__status item__status--undone"}
            >
              Uncompleted :(
            </label>
          )}
        </div>
      </li>
    );
  }
}

export default ListItem;
