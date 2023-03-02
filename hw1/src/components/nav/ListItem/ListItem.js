import LiIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import style from "../nav.module.scss";

const ListItem = (props) => {
  return (
    <li
      id={props.name}
      onClick={(e) => {
        props.sectionToggling(e);
      }}
      className={style.list__container__item}
    >
      <span className={style.list__link}>
        <LiIcon />
      </span>
      <span>{props.name}</span>
    </li>
  );
};

export default ListItem;
