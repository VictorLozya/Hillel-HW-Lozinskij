import React, { Component } from "react";
import Nav from "../nav/nav";
import "./main.scss";

class Main extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"wrapper"}>
          <Nav />
          <section className={"section"}>

          </section>
        </div>
      </div>
    );
  }
}

export default Main;
