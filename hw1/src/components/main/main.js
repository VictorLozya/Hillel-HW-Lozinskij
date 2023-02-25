import React, { Component } from "react";
import Nav from "../nav/nav";
import "./main.scss";
import DataList from "./DataList/DataList";

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
          {this.state.isPeoples && (
            <DataList people={this.state.isPeoples} endpoint={"people"} />
          )}
          {this.state.isPlanets && (
            <DataList planet={this.state.isPlanets} endpoint={"planets"} />
          )}
          {this.state.isShips && (
            <DataList ship={this.state.isShips} endpoint={"starships"} />
          )}
          {!this.state.isShips &&
            !this.state.isPlanets &&
            !this.state.isPeoples && (
              <DataList planet={true} endpoint={"people"} />
            )}
        </div>
      </div>
    );
  }
}

export default Main;
