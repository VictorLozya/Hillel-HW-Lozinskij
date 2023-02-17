import React, { Component } from "react";
import PhoneList from "./PhoneList/PhoneList";
import PhoneForm from "./PhoneForm/PhoneForm";
import { v4 as uuidv4 } from "uuid";

import "./PhoneContacts.scss";

class PhoneContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtonStatus: false,
      contacts: [
        {
          id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
          firstName: "Victor",
          secondName: "Lozinskij",
          tel: "+38050505050",
        },
        {
          id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
          firstName: "John",
          secondName: "Doe",
          tel: "00000000000",
        },
      ],
    };
  }
  addNewContact = (firstName, secondName, tel) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: uuidv4(),
          firstName: firstName,
          secondName: secondName,
          tel: tel,
        },
      ],
    });
    console.log(this.state.contacts);
  };
  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== id),
    });
  };
  toggleButton = (e) => {
    e.preventDefault();
    this.setState({ toggleButtonStatus: !this.state.toggleButtonStatus });
  };
  render() {
    return (
      <div className={"phone-contacts"}>
        <PhoneList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
        {this.state.toggleButtonStatus ? (
          <PhoneForm
            toggleForm={this.toggleButton}
            addNewContact={this.addNewContact}
          />
        ) : (
          <button
            className={"form__button"}
            onClick={(e) => this.toggleButton(e)}
          >
            {" "}
            Add contact
          </button>
        )}
      </div>
    );
  }
}

export default PhoneContacts;
