import React, { Component } from "react";

class InputPhone extends Component {
  constructor() {
    super();
    this.state = {
      tel: "",
    };
  }
  handleTelValue = (e) => {
    this.setState({
      tel: e.target.value,
    });
  };
  inputTelValidation = (e) => {
    if (this.state.tel.match(/[^\p{N}\+]/gu)) {
      e.target.className = "form__input--alert";
      this.setState({
        tel: this.state.tel.replace(/[^\p{N}\+]/gu, ""),
      });
    } else {
      e.target.className = "form__input";
    }
  };
  render() {
    return (
      <div className="tel-block">
        <label
          className={
            this.props.validation ? "form__label--alert" : "form__label"
          }
          htmlFor={this.props.name}
        >
          Enter your {this.props.placeholder}
        </label>
        <input
          type="tel"
          name={this.props.name}
          value={this.state.tel}
          onChange={(e) => {
            this.handleTelValue(e);
            this.props.handleTelValue(e);
          }}
          onKeyUp={(e) => this.inputTelValidation(e)}
        />
      </div>
    );
  }
}

export default InputPhone;
