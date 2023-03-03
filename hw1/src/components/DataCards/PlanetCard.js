import React, { useContext } from "react";
import "./DataCard.scss";
import { GlobalTheme, LanguageContext } from "../../App";

const PlanetCard = ({ item }) => {
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
          {language ? `Diameter:` : `Окружність:`}
        </span>
        <span className={"card__content__value"}>{item.diameter} km</span>
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
          {language ? `Rotation speed:` : `Швидкість обертання:`}
        </span>
        <span className={"card__content__value"}>
          {item.rotation_period} {language ? `hours` : `годин`}
        </span>
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
          {language ? `Orbital period:` : `Орбітальний період:`}
        </span>
        <span className={"card__content__value"}>
          {item.orbital_period} {language ? `days` : `днів`}
        </span>
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
          {language ? `Gravity:` : `Сила тяжіння:`}
        </span>
        <span className={"card__content__value"}>{item.gravity} G</span>
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
          {language ? `Climate:` : `Клімат:`}
        </span>
        <span className={"card__content__value"}>{item.climate} </span>
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
          {language ? `Terrain:` : `Біом:`}
        </span>
        <span className={"card__content__value"}>{item.terrain} </span>
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
          {language ? `Surface Water:` : `Поверхневі Води:`}
        </span>
        <span className={"card__content__value"}>{item.surface_water}%</span>
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
          {language ? `Population:` : `Населення:`}
        </span>
        <span className={"card__content__value"}>
          {item.population}
          {language ? ` beigns` : ` осіб`}
        </span>
      </div>
    </div>
  );
};

export default PlanetCard;
