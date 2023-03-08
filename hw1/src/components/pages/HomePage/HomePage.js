import { useContext } from "react";
import { LanguageContext, UserLogin } from "../../../App";
import { Link } from "react-router-dom";

const HomePage = () => {
  const languageContext = useContext(LanguageContext);
  const authContext = useContext(UserLogin);
  const language = languageContext.languageState === "eng";

  return language ? (
    <div className={"wrapper"}>
      <h1>Welcome to StarWars APP</h1>
      <p>On this page you can see all Jedis, Ships and Planets</p>
      {authContext.loggedIn ? (
        <div>
          <button onClick={() => authContext.setAuthorization(false)}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p>To see the data, you need to be logged in</p>
          <Link to={"/login"}>Log In</Link>
        </div>
      )}
    </div>
  ) : (
    <div className={"wrapper"}>
      <h1>Ласкаво просимо на StarWars APP</h1>
      <p>
        На цій сторінці ви зможете подивитися списки Джедаїв, Кораблів та Планет
      </p>
      {authContext.loggedIn ? (
        <div>
          <button onClick={() => authContext.setAuthorization(false)}>
            Вийти з особистого кабінету
          </button>
        </div>
      ) : (
        <div>
          <p>Для того, щоб подивитись інформацію, ви маєте авторизуватися</p>
          <Link to={"/login"}>Авторизуватись</Link>
        </div>
      )}
    </div>
  );
};
export default HomePage;
