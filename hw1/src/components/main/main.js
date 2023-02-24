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
  componentDidMount() {
    this.myRequest("planets");
    this.myRequest("starships");
    this.myRequest("people");
  }

  myRequest = (endpoint) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://swapi.dev/api/${endpoint}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
      })
      .catch((error) => console.error(`error`, error));
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
        </div>
      </div>
    );
  }
}

export default Main;
