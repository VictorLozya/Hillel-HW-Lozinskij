import React, { Component } from "react";

import "./PhoneForm.scss";
import InputPhone from "./InputPhone/InputPhone";
import InputText from "./InputPhone/InputText";

class PhoneForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      secondName: "",
      tel: "",
      firstNameEmpty: false,
      secondNameEmpty: false,
      telEmpty: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addNewContact = (e) => {
    let [firstName, secondName, tel] = [
      this.state.firstName,
      this.state.secondName,
      this.state.tel,
    ];
    e.preventDefault();
    if (firstName && secondName && tel) {
      this.props.addNewContact(firstName, secondName, tel);
      this.props.toggleForm(e);
    } else {
      if (!firstName) {
        this.setState({ firstNameEmpty: true });
      }
      if (!secondName) {
        this.setState({ secondNameEmpty: true });
      }
      if (!tel) {
        this.setState({ telEmpty: true });
      }
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.addNewContact}>
        <InputText
          placeholder={"first name"}
          validation={this.state.firstNameEmpty}
          name={"firstName"}
          handleChange={this.handleChange}
        />
        <InputText
          placeholder={"second name"}
          validation={this.state.secondNameEmpty}
          name={"secondName"}
          handleChange={this.handleChange}
        />
        <InputPhone
          placeholder={"telephone"}
          validation={this.state.telEmpty}
          handleTelValue={this.handleChange}
          name={"tel"}
        />
        <div className="form__button-block">
          <input className={"form__button"} type="submit" value={"Submit"} />
          <button
            className={"form__button--cancel"}
            onClick={(e) => this.props.toggleForm(e)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default PhoneForm;
