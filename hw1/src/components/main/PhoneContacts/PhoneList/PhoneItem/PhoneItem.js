import React, { Component } from "react";

import "./PhoneItem.scss";

class PhoneItem extends Component {
  render() {
    return (
      <li className={"item"}>
        <span className="item__number">{this.props.index}</span>
        <div className="item__name">
          <span className="item__first-name">{this.props.firstName}</span>
          <span className="item__second-name">{this.props.secondName}</span>
        </div>
        <span className={"item__tel"}>{this.props.tel}</span>
        <button
          className={"item__delete"}
          onClick={() => this.props.deleteContact(this.props.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default PhoneItem;
