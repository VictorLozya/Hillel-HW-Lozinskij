import LiIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import style from "../nav.module.scss";
import { useContext } from "react";
import { GlobalTheme } from "../../../App";

const ListItem = (props) => {
  const context = useContext(GlobalTheme);

  return (
    <li
      id={props.name}
      onClick={(e) => {
        props.sectionToggling(e);
      }}
      className={
        context.themeLight
          ? style.list__container__item_light
          : style.list__container__item
      }
    >
      <span className={style.list__link}>
        <LiIcon />
      </span>
      <span>{props.name}</span>
    </li>
  );
};

export default ListItem;
