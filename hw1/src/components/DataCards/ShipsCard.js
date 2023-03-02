import React from "react";
import "./DataCard.scss";

const DataCard = ({ item }) => {
  return (
    <div className={"card"}>
      <h1 className={"card__title"}>{item.name}</h1>
      <h2 className={"card__subtitle"}>Model : {item.model}</h2>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Starship Class:</span>
        <span className={"card__content__value"}>{item.starship_class}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Manufacturer:</span>
        <span className={"card__content__value"}>{item.manufacturer}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Costs:</span>
        <span className={"card__content__value"}>
          {item.cost_in_credits} credits
        </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Length:</span>
        <span className={"card__content__value"}>{item.length} meters</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Crew:</span>
        <span className={"card__content__value"}>{item.crew} members</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Passengers:</span>
        <span className={"card__content__value"}>
          {item.passengers} members
        </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Max Atmosphering Speed:</span>
        <span className={"card__content__value"}>
          {item.max_atmosphering_speed === "n/a"
            ? "Cannot fly in atmosphere"
            : item.max_atmosphering_speed + " Kph"}
        </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Hyperdrive Rating:</span>
        <span className={"card__content__value"}>{item.hyperdrive_rating}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>MGLT speed:</span>
        <span className={"card__content__value"}>{item.MGLT} MGLT/hour</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Cargo Capacity:</span>
        <span className={"card__content__value"}>{item.cargo_capacity} kg</span>
      </div>
    </div>
  );
};

export default DataCard;
