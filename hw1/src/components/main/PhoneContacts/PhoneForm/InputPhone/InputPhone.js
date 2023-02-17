import React, { Component } from "react";

class InputPhone extends Component {
  constructor() {
    super();
    this.state = {
      tel: "",
      invalidCharacter: false,
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
        invalidCharacter: true,
      });
    } else {
      e.target.className = "form__input";
      this.setState({
        invalidCharacter: false,
      });
    }
  };
  render() {
    return (
      <div className="input-block">
        <label
          className={
            this.props.validation ? "form__label--alert" : "form__label"
          }
          htmlFor={this.props.name}
        >
          Enter {this.props.placeholder}
        </label>
        <input
          className={"input-block__area"}
          id={this.props.name}
          type="tel"
          name={this.props.name}
          value={this.state.tel}
          onChange={(e) => {
            this.handleTelValue(e);
            this.props.handleTelValue(e);
          }}
          onKeyUp={(e) => this.inputTelValidation(e)}
        />
        {this.state.invalidCharacter ? (
          <span className={"form__alert-text"}>
            Input must contain numbers.
          </span>
        ) : null}
      </div>
    );
  }
}

export default InputPhone;
