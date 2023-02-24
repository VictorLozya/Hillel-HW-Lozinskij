import React, { Component } from "react";
import "./DataCard.scss";

class PlanetCard extends Component {
  render() {
    return (
      <div className={"card"}>
        <h1 className={"card__title"}>{this.props.item.name}</h1>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Diameter:</span>
          <span className={"card__content__value"}>
            {this.props.item.diameter} km
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Rotation speed:</span>
          <span className={"card__content__value"}>
            {this.props.item.rotation_period} hours
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Orbital period:</span>
          <span className={"card__content__value"}>
            {this.props.item.orbital_period} days
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Gravity:</span>
          <span className={"card__content__value"}>
            {this.props.item.gravity} G
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Climate:</span>
          <span className={"card__content__value"}>
            {this.props.item.climate} G
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Terrain:</span>
          <span className={"card__content__value"}>
            {this.props.item.terrain} G
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Surface Water:</span>
          <span className={"card__content__value"}>
            {this.props.item.surface_water}%
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Population:</span>
          <span className={"card__content__value"}>
            {this.props.item.population} beigns
          </span>
        </div>
      </div>
    );
  }
}

export default PlanetCard;
