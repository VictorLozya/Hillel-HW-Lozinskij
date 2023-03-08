import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalTheme, UserLogin } from "../../../App";

const HeaderNav = () => {
  const context = useContext(GlobalTheme);
  const logInContext = useContext(UserLogin);
  return logInContext.loggedIn ? (
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
        <Link to={"/peoples"}>Jedis</Link>
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
  ) : (
    <h2>Star Wars App</h2>
  );
};
export default HeaderNav;
