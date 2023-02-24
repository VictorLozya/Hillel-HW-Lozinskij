import React, { Component } from "react";
import Nav from "../nav/nav";
import "./main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isPeoples: false,
      isPlanets: false,
      isShips: false,
    };
  }
  sectionToggling = (e) => {
    this.targetValidation(e, "Jedi", "isPeoples", "isShips", "isPlanets");
    this.targetValidation(e, "Planets", "isPlanets", "isPeoples", "isShips");
    this.targetValidation(e, "Ships", "isShips", "isPeoples", "isPlanets");
  };

  targetValidation = (
    event,
    name,
    section,
    disabledSection,
    disabledSection2
  ) => {
    if (event.currentTarget.id === name) {
      this.setState({
        [section]: true,
        [disabledSection]: false,
        [disabledSection2]: false,
      });
    }
  };

  render() {
    return (
      <div className={"container"}>
        <div className={"wrapper"}>
          <Nav sectionToggling={this.sectionToggling} />
          {this.state.isPeoples ? (
            <p> Hello From Jedi</p>
          ) : this.state.isShips ? (
            <p> Hello From Ships</p>
          ) : this.state.isPlanets ? (
            <p>Hello from Planets</p>
          ) : (
            <p>Hello from Jedi</p>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
