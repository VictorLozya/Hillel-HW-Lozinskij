import React, { useContext } from "react";
import ListItem from "./ListItem/ListItem";

import style from "./nav.module.scss";
import { LanguageContext } from "../../App";

const Nav = (props) => {
  const languageContext = useContext(LanguageContext);
  return (
    <nav className={style.list}>
      <ul className={style.list__container}>
        <ListItem
          id={"Jedi"}
          name={languageContext.languageState === "eng" ? "Jedi" : "Джедаї"}
          sectionToggling={props.sectionToggling}
        />
        <ListItem
          id={"Planets"}
          name={languageContext.languageState === "eng" ? "Planets" : "Планети"}
          sectionToggling={props.sectionToggling}
        />
        <ListItem
          id={"Ships"}
          name={languageContext.languageState === "eng" ? "Ships" : "Кораблі"}
          sectionToggling={props.sectionToggling}
        />
      </ul>
    </nav>
  );
};

export default Nav;
