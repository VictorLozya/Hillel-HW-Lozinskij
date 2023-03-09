import { useContext } from "react";
import { LanguageContext, UserLogin } from "../../../App";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const languageContext = useContext(LanguageContext);
  const authContext = useContext(UserLogin);
  const language = languageContext.languageState === "eng";
  const navigate = useNavigate();
  return language ? (
    <div className={"home__wrapper"}>
      <h1 className={"home__title"}>Welcome to StarWars APP</h1>
      <p className={"home__text"}>
        On this page you can see all Jedi, Ships and Planets of Star Wars
        Universe. You can find API <a href="https://swapi.dev/">here</a>.
      </p>
      {authContext.loggedIn ? (
        <div className={"home__section"}>
          <button
            className={"home__button"}
            onClick={() => authContext.setAuthorization(false)}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className={"home__section"}>
          <p>To see the data, you need to be logged in.</p>
          <button className={"home__button"} onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className={"home__wrapper"}>
      <h1 className={"home__title"}>Ласкаво просимо на StarWars APP</h1>
      <p className={"home__text"}>
        На цій сторінці ви зможете подивитися списки Джедаїв, Кораблів та
        Планет. Ви можете знайти АРІ <a href="https://swapi.dev/">тут</a>.
      </p>
      {authContext.loggedIn ? (
        <div className={"home__section"}>
          <button
            className={"home__button"}
            onClick={() => authContext.setAuthorization(false)}
          >
            Вийти з особистого кабінету
          </button>
        </div>
      ) : (
        <div className={"home__section"}>
          <p>Для того, щоб подивитись інформацію, ви маєте авторизуватись.</p>
          <button className={"home__button"} onClick={() => navigate("/login")}>
            Авторизуватись
          </button>
        </div>
      )}
    </div>
  );
};
export default HomePage;
