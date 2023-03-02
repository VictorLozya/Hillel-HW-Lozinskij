import React from "react";
import "./DataCard.scss";

const PlanetCard = ({ item }) => {
  return (
    <div className={"card"}>
      <h1 className={"card__title"}>{item.name}</h1>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Diameter:</span>
        <span className={"card__content__value"}>{item.diameter} km</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Rotation speed:</span>
        <span className={"card__content__value"}>
          {item.rotation_period} hours
        </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Orbital period:</span>
        <span className={"card__content__value"}>
          {item.orbital_period} days
        </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Gravity:</span>
        <span className={"card__content__value"}>{item.gravity} G</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Climate:</span>
        <span className={"card__content__value"}>{item.climate} </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Terrain:</span>
        <span className={"card__content__value"}>{item.terrain} </span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Surface Water:</span>
        <span className={"card__content__value"}>{item.surface_water}%</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Population:</span>
        <span className={"card__content__value"}>{item.population} beigns</span>
      </div>
    </div>
  );
};

export default PlanetCard;
