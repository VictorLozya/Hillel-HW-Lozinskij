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
      <h2
        className={
          context.themeLight
            ? "card__subtitle card__subtitle--light"
            : "card__subtitle"
        }
      >
        {language ? `Model: ` : `Модель: `}
        {item.model}
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
          {language ? `Starship Class: ` : `Клас зорельоту: `}
        </span>
        <span className={"card__content__value"}>{item.starship_class}</span>
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
          {language ? `Manufacturer: ` : `Виробник: `}
        </span>
        <span className={"card__content__value"}>{item.manufacturer}</span>
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
          {language ? `Costs: ` : `Вартість: `}
        </span>
        <span className={"card__content__value"}>
          {item.cost_in_credits}
          {language ? ` credits` : ` кредитів`}
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
          {language ? `Length:` : `Довжина:`}
        </span>
        <span className={"card__content__value"}>{item.length} m</span>
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
          {language ? `Crew:` : `Екіпаж:`}
        </span>
        <span className={"card__content__value"}>
          {item.crew}
          {language ? ` members` : ` осіб`}
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
          {language ? `Passengers:` : `Пасажирські місця:`}
        </span>
        <span className={"card__content__value"}>
          {item.passengers}
          {language ? ` members` : ` штук`}
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
          {language ? `Max Atmosphering Speed` : `Швидкість в атмосфері`}
        </span>
        <span className={"card__content__value"}>
          {item.max_atmosphering_speed === "n/a"
            ? "Cannot fly in atmosphere"
            : item.max_atmosphering_speed + " Kph"}
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
          {language ? `Hyperdrive Rating:` : `Клас гіпердвигуну:`}
        </span>
        <span className={"card__content__value"}>{item.hyperdrive_rating}</span>
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
          {language ? `MGLT speed:` : `MGLT швидкість:`}
        </span>
        <span className={"card__content__value"}>
          {item.MGLT} MGLT/
          {language ? `hour` : `годину`}
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
          {language ? `Cargo Capacity:` : `Вмістимість вантажу:`}
        </span>
        <span className={"card__content__value"}>{item.cargo_capacity} kg</span>
      </div>
    </div>
  );
};

export default DataCard;
