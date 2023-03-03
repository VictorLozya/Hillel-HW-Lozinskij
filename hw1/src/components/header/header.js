import React from "react";
import "./header.scss";
import Logo from "../../assets/pngwing.png";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

const Header = () => {
  return (
    <header className={"header"}>
      <div className={"header__container"}>
        <div className={"header__logo"}>
          <img className={"logo"} src={Logo} alt="logo" />
        </div>
        <div className={"header__text"}>
          <span className={"header__quote"}></span>
        </div>
        <div className={"header__buttons"}>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
