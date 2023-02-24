import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

import style from "./nav.module.scss";
class Nav extends Component {
  render() {
    return (
      <nav className={style.list}>
        <ul className={style.list__container}>
          <ListItem
            name={"Jedi"}
            sectionToggling={this.props.sectionToggling}
          />
          <ListItem
            name={"Planets"}
            sectionToggling={this.props.sectionToggling}
          />
          <ListItem
            name={"Ships"}
            sectionToggling={this.props.sectionToggling}
          />
        </ul>
      </nav>
    );
  }
}

export default Nav;
