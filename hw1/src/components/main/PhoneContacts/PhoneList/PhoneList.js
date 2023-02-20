import React, { Component } from "react";
import PhoneItem from "./PhoneItem/PhoneItem";

import "./PhoneList.scss";

class PhoneList extends Component {
  render() {
    return (
      <ul className={"phone-list"}>
        {this.props.contacts.map((contact, index) => {
          return (
            <PhoneItem
              index={index + 1}
              id={contact.id}
              firstName={contact.firstName}
              secondName={contact.secondName}
              tel={contact.tel}
              key={contact.id}
              deleteContact={this.props.deleteContact}
            />
          );
        })}
      </ul>
    );
  }
}

export default PhoneList;
