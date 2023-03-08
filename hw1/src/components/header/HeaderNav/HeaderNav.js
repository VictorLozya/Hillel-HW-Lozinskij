import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalTheme } from "../../../App";

const HeaderNav = () => {
  const context = useContext(GlobalTheme);
  return (
    <ul className={"header__nav"}>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/"}>Home</Link>
      </li>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/peoples"}>Peoples</Link>
      </li>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/planets"}>Planets</Link>
      </li>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/ships"}>Ships</Link>
      </li>
    </ul>
  );
};
export default HeaderNav;
