import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li key={this.props.id} className={`item`}>
        <span className="item_text">{this.props.item.task}</span>
        <input
          type="checkbox"
          defaultChecked={this.props.item.completed}
          onChange={(e) => {
            let value = e.target.checked;
            this.props.statusUpgrade(value, this.props.id);
          }}
        />
      </li>
    );
  }
}

export default ListItem;
