import React from "react";
import "./header.scss";
import Logo from "../../assets/pngwing.png";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import LanguageToggler from "./LanguageToggler/LanguageToggler";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  return (
    <header className={"header"}>
      <div className={"header__container"}>
        <div className={"header__logo"}>
          <img className={"logo"} src={Logo} alt="logo" />
        </div>
        <HeaderNav />
        <div className={"header__buttons"}>
          <ThemeToggler />
          <LanguageToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
