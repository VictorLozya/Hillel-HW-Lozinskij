import { useContext } from "react";
import { UserLogin } from "../../App";

const LoginPage = () => {
  let logInContext = useContext(UserLogin);
  return (
    <div>
      <label htmlFor="loginCheckbox">Enable checkbox, to log in</label>
      <input
        id={"loginCheckbox"}
        type="checkbox"
        value={logInContext.loggedIn}
        onChange={() => {
          logInContext.setAuthorization(!logInContext.loggedIn);
          console.log(logInContext.loggedIn);
        }}
      />
    </div>
  );
};
export default LoginPage;
