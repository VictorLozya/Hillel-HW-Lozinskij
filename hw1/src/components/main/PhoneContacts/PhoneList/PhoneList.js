import React, { Component } from "react";
import PhoneItem from "./PhoneItem/PhoneItem";
class PhoneList extends Component {
  render() {
    return (
      <ul className={'phoneList'}>
        { this.props.contacts.map((contact, index) => {
          return <PhoneItem
            index={index + 1}
            id={contact.id}
            firstName={contact.firstName}
            secondName={contact.secondName}
            tel={contact.tel}
            key={contact.id}
            deleteContact={this.props.deleteContact} />
        })}
      </ul>
    );
  }
}

export default PhoneList;