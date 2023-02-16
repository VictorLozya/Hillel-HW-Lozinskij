import React, { Component } from "react";
import FormButton from "./FormButton/FormButton";

class PhoneForm extends Component {
  render() {
    return (
      <div>
        <form  className="ownform">
          <input type="text" />
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PhoneForm;