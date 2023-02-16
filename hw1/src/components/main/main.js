import React, { Component } from "react";
import Nav from "../nav/nav";
import PhoneContacts from "./PhoneContacts/PhoneContacts";

import "./main.scss";

class Main extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"wrapper"}>
          <Nav />
          <section className={"section"}>
            <PhoneContacts />
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
