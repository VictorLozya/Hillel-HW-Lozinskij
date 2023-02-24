import React, { Component } from "react";
import LiIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import style from "../nav.module.scss";

class ListItem extends Component {
  render() {
    return (
      <li
        id={this.props.name}
        onClick={(e) => {
          this.props.sectionToggling(e);
        }}
        className={style.list__container__item}
      >
        <span className={style.list__link}>
          <LiIcon />
        </span>
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default ListItem;
