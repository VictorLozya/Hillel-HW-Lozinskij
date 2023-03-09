import { useContext } from "react";
import { UserLogin } from "../../../App";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
const LoginPage = () => {
  const logInContext = useContext(UserLogin);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className={"login__wrapper"}>
      <label className={"login__text"} htmlFor="loginCheckbox">
        Enable checkbox, to log in
      </label>
      <input
        className={"login__input"}
        id={"loginCheckbox"}
        type="checkbox"
        value={logInContext.loggedIn}
        onChange={() => {
          logInContext.setAuthorization(true);
          setTimeout(navigateToHome, 2000);
        }}
      />
    </div>
  );
};
export default LoginPage;
