import React from "react";
import "./header.scss";
import Button from "@mui/material/Button";
import Logo from "../../assets/pngwing.png";
const Header = () => {
  return (
    <header className={"header"}>
      <div className={"header__container"}>
        <div className={"header__logo"}>
          <img className={"logo"} src={Logo} alt="logo" />
        </div>
        <div className={"header__text"}>
          <span className={"header__quote"}>Hello World!</span>
        </div>
        <div className={"header__buttons"}>
          {/*    Button 1 outlined*/}
          <Button variant="outlined">Sign Up</Button>
          {/*    Button 2 filled*/}
          <Button variant="contained">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
