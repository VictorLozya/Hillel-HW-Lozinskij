import React, { Component } from "react";
import "./DataCard.scss";

class DataCard extends Component {
  render() {
    return (
      <div className={"card"}>
        <h1 className={"card__title"}>{this.props.item.name}</h1>
        <h2 className={"card__subtitle"}>Model : {this.props.item.model}</h2>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Starship Class:</span>
          <span className={"card__content__value"}>
            {this.props.item.starship_class}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Manufacturer:</span>
          <span className={"card__content__value"}>
            {this.props.item.manufacturer}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Costs:</span>
          <span className={"card__content__value"}>
            {this.props.item.cost_in_credits} credits
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Length:</span>
          <span className={"card__content__value"}>
            {this.props.item.length} meters
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Crew:</span>
          <span className={"card__content__value"}>
            {this.props.item.crew} members
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Passengers:</span>
          <span className={"card__content__value"}>
            {this.props.item.passengers} members
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>
            Max Atmosphering Speed:
          </span>
          <span className={"card__content__value"}>
            {this.props.item.max_atmosphering_speed === "n/a"
              ? "Cannot fly in atmosphere"
              : this.props.item.max_atmosphering_speed + " Kph"}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Hyperdrive Rating:</span>
          <span className={"card__content__value"}>
            {this.props.item.hyperdrive_rating}
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>MGLT speed:</span>
          <span className={"card__content__value"}>
            {this.props.item.MGLT} MGLT/hour
          </span>
        </div>
        <div className={"card__content"}>
          <span className={"card__content__title"}>Cargo Capacity:</span>
          <span className={"card__content__value"}>
            {this.props.item.cargo_capacity} kg
          </span>
        </div>
      </div>
    );
  }
}

export default DataCard;
