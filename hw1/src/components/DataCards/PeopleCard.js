import React, { useContext } from "react";
import "./DataCard.scss";
import { GlobalTheme } from "../../App";

const DataCard = ({ item }) => {
  const context = useContext(GlobalTheme);

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
          Robot
        </h2>
      )}
      <h2
        className={
          context.themeLight
            ? "card__subtitle card__subtitle--light"
            : "card__subtitle"
        }
      >
        Birth Date: {item.birth_year}
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
          Height:
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
          Height:
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
          Gender:
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
          Hair color:
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
          Eye color:
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
          Skin color:
        </span>
        <span className={"card__content__value"}>{item.skin_color}</span>
      </div>
    </div>
  );
};

export default DataCard;
