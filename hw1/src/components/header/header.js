import React from "react";
import "./header.scss";
import Logo from "../../assets/pngwing.png";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import LanguageToggler from "./LanguageToggler/LanguageToggler";
import HeaderNav from "./HeaderNav/HeaderNav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={"header"}>
      <div className={"header__container"}>
        <div onClick={() => navigate("/")} className={"header__logo"}>
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
