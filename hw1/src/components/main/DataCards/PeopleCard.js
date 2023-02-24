import React, { Component } from "react";
import "./DataCard.scss";

class DataCard extends Component {
  render() {
    return (
      <div className={"card"}>
        <h1 className={"card__title"}>{this.props.item.name}</h1>
        {this.props.item.gender === "n/a" && (
          <h2 className={"card__subtitle"}>Robot</h2>
        )}
        <h2 className={"card__subtitle"}>
          Birth Date: {this.props.item.birth_year}
        </h2>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Height:</span>
          <span className={"card__content__value"}>
            {this.props.item.height}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Height:</span>
          <span className={"card__content__value"}>
            {this.props.item.height}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Gender:</span>
          <span className={"card__content__value"}>
            {this.props.item.gender}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Hair color:</span>
          <span className={"card__content__value"}>
            {this.props.item.hair_color}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Eye color:</span>
          <span className={"card__content__value"}>
            {this.props.item.eye_color}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Skin color:</span>
          <span className={"card__content__value"}>
            {this.props.item.skin_color}
          </span>
        </div>
      </div>
    );
  }
}

export default DataCard;
