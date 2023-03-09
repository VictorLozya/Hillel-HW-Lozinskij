import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalTheme, LanguageContext, UserLogin } from "../../../App";

const HeaderNav = () => {
  const context = useContext(GlobalTheme);
  const logInContext = useContext(UserLogin);
  const languageContext = useContext(LanguageContext);
  const language = languageContext.languageState === "eng";
  return logInContext.loggedIn ? (
    <ul className={"header__nav"}>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/"}>{language ? "Home" : "Початкова"}</Link>
      </li>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/peoples"}>{language ? "Jedi" : "Джедаї"}</Link>
      </li>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/planets"}> {language ? "Planets" : "Планети"}</Link>
      </li>
      <li
        className={
          context.themeLight
            ? "header__nav__link header__nav__link--light"
            : "header__nav__link"
        }
      >
        <Link to={"/ships"}>{language ? "Ships" : "Зорельоти"}</Link>
      </li>
    </ul>
  ) : (
    <h2>Star Wars App</h2>
  );
};
export default HeaderNav;
