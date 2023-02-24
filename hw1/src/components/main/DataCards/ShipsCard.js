import React, { Component } from "react";

class DataCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <h2>Model : {this.props.item.model}</h2>
        <span>Starship Class: {this.props.item.starship_class}</span>
        <span>Manufacturer: {this.props.item.manufacturer}</span>
        <span>Costs: {this.props.item.cost_in_credits} credits</span>
        <span>Length: {this.props.item.length} meters</span>
        <span>Crew: {this.props.item.crew} members</span>
        <span>Passengers : {this.props.item.passengers} members</span>
        <span>
          Max Atmosphering Speed :{" "}
          {this.props.item.max_atmosphering_speed === "n/a"
            ? "Cannot fly in atmosphere"
            : this.props.item.max_atmosphering_speed + " Kph"}
        </span>
        <span>Hyperdrive Rating : {this.props.item.hyperdrive_rating}</span>
        <span>MGLT speed : {this.props.item.MGLT} MGLT/hour</span>
        <span>Cargo Capacity : {this.props.item.cargo_capacity} kg</span>
      </div>
    );
  }
}

export default DataCard;
