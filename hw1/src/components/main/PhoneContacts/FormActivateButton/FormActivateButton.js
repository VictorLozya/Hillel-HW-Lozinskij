import React, { Component } from "react";

class FormActivateButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.formActivate} className="clickme">clickme</button>
      </div>
    );
  }
}

export default FormActivateButton;