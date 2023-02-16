import React, { Component } from "react";

class InputText extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  handleValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  inputTextValidation = (e) => {
    if (this.state.value.match(/[^\p{Alpha}\p{M}]/gu)) {
      e.target.className = "form__input--alert";
      this.setState({
        value: this.state.value.replace(/[^\p{Alpha}\p{M}]/gu, ""),
      });
    } else {
      e.target.className = "form__input";
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
          Enter your {this.props.placeholder}
        </label>
        <input
          id={this.props.name}
          type="text"
          name={this.props.name}
          value={this.state.value}
          onChange={(e) => {
            this.handleValue(e);
            this.props.handleChange(e);
          }}
          onKeyUp={(e) => this.inputTextValidation(e)}
        />
      </div>
    );
  }
}

export default InputText;
