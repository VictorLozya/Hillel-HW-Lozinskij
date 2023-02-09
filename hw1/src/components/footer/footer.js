import React, { Component } from "react";
import style from "./footer.module.scss";
import FbIco from "@mui/icons-material/FacebookRounded";
import TwitterIco from "@mui/icons-material/Twitter";
import IgIco from "@mui/icons-material/Instagram";
class Footer extends Component {
  render() {
    return (
      <nav className={style.list}>
        <ul className={style.list__container}>
          <li className={style.list__item}>
            <a href={"*"} className={style.list__link}>
              <FbIco />
            </a>
          </li>
          <li className={style.list__item}>
            <a href={"*"} className={style.list__link}>
              <TwitterIco />
            </a>
          </li>
          <li className={style.list__item}>
            <a href={"*"} className={style.list__link}>
              <IgIco />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Footer;
