import React, { Component } from "react";
import LiIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import style from "./nav.module.scss";
class Nav extends Component {
  render() {
    return (
      <nav className={style.list}>
        <ul className={style.list__container}>
          <li className={style.list__container__item}>
            <a href={"*"} className={style.list__link}>
              <LiIcon />
            </a>
            <span>Home</span>
          </li>
          <li className={style.list__container__item}>
            <a href={"*"} className={style.list__link}>
              <LiIcon />
            </a>
            <span>Notes</span>
          </li>
          <li className={style.list__container__item}>
            <a href={"*"} className={style.list__link}>
              <LiIcon />
            </a>
            <span>News</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
