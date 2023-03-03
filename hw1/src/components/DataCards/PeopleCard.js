import React, { useContext } from "react";
import "./DataCard.scss";
import { GlobalTheme, LanguageContext } from "../../App";

const DataCard = ({ item }) => {
  const context = useContext(GlobalTheme);
  const languageContext = useContext(LanguageContext);
  const language = languageContext.languageState === "eng";
  return (
    <div className={"card"}>
      <h1
        className={
          context.themeLight ? "card__title card__title--light" : "card__title"
        }
      >
        {item.name}
      </h1>
      {item.gender === "n/a" && (
        <h2
          className={
            context.themeLight
              ? "card__subtitle card__subtitle--light"
              : "card__subtitle"
          }
        >
          {language ? "Robot" : "Робот"}
        </h2>
      )}
      <h2
        className={
          context.themeLight
            ? "card__subtitle card__subtitle--light"
            : "card__subtitle"
        }
      >
        {language
          ? `Birth Date: ${item.birth_year}`
          : `Дата народження: ${item.birth_year}`}
      </h2>
      <div
        className={
          context.themeLight
            ? "card__content card__content--light"
            : "card__content"
        }
      >
        <span
          className={
            context.themeLight
              ? "card__content__title card__content__title--light"
              : "card__content__title"
          }
        >
          {language ? `Height:` : `Зріст:`}
        </span>
        <span className={"card__content__value"}>{item.height}</span>
      </div>
      <div
        className={
          context.themeLight
            ? "card__content card__content--light"
            : "card__content"
        }
      >
        <span
          className={
            context.themeLight
              ? "card__content__title card__content__title--light"
              : "card__content__title"
          }
        >
          {language ? `Mass:` : `Вага:`}
        </span>
        <span className={"card__content__value"}>{item.mass}</span>
      </div>
      <div
        className={
          context.themeLight
            ? "card__content card__content--light"
            : "card__content"
        }
      >
        <span
          className={
            context.themeLight
              ? "card__content__title card__content__title--light"
              : "card__content__title"
          }
        >
          {language ? `Gender:` : `Стать:`}
        </span>
        <span className={"card__content__value"}>{item.gender}</span>
      </div>
      <div
        className={
          context.themeLight
            ? "card__content card__content--light"
            : "card__content"
        }
      >
        <span
          className={
            context.themeLight
              ? "card__content__title card__content__title--light"
              : "card__content__title"
          }
        >
          {language ? `Hair color:` : `Колір волосся:`}
        </span>
        <span className={"card__content__value"}>{item.hair_color}</span>
      </div>
      <div
        className={
          context.themeLight
            ? "card__content card__content--light"
            : "card__content"
        }
      >
        <span
          className={
            context.themeLight
              ? "card__content__title card__content__title--light"
              : "card__content__title"
          }
        >
          {language ? `Eye color:` : `Колір очей:`}
        </span>
        <span className={"card__content__value"}>{item.eye_color}</span>
      </div>
      <div
        className={
          context.themeLight
            ? "card__content card__content--light"
            : "card__content"
        }
      >
        <span
          className={
            context.themeLight
              ? "card__content__title card__content__title--light"
              : "card__content__title"
          }
        >
          {language ? `Skin color:` : `Колір шкіри:`}
        </span>
        <span className={"card__content__value"}>{item.skin_color}</span>
      </div>
    </div>
  );
};

export default DataCard;
