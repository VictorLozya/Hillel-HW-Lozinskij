import React from "react";
import "./DataCard.scss";

const DataCard = ({ item }) => {
  return (
    <div className={"card"}>
      <h1 className={"card__title"}>{item.name}</h1>
      {item.gender === "n/a" && <h2 className={"card__subtitle"}>Robot</h2>}
      <h2 className={"card__subtitle"}>Birth Date: {item.birth_year}</h2>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Height:</span>
        <span className={"card__content__value"}>{item.height}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Height:</span>
        <span className={"card__content__value"}>{item.height}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Gender:</span>
        <span className={"card__content__value"}>{item.gender}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Hair color:</span>
        <span className={"card__content__value"}>{item.hair_color}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Eye color:</span>
        <span className={"card__content__value"}>{item.eye_color}</span>
      </div>
      <div className={"card__content"}>
        <span className={"card__content__title"}>Skin color:</span>
        <span className={"card__content__value"}>{item.skin_color}</span>
      </div>
    </div>
  );
};

export default DataCard;
