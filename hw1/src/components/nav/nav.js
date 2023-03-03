import React from "react";
import ListItem from "./ListItem/ListItem";

import style from "./nav.module.scss";

const Nav = (props) => {
  return (
    <nav className={style.list}>
      <ul className={style.list__container}>
        <ListItem name={"Jedi"} sectionToggling={props.sectionToggling} />
        <ListItem name={"Planets"} sectionToggling={props.sectionToggling} />
        <ListItem name={"Ships"} sectionToggling={props.sectionToggling} />
      </ul>
    </nav>
  );
};

export default Nav;
