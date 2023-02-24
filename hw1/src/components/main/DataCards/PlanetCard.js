import React, { Component } from "react";

class PlanetCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <span>Diameter: {this.props.item.diameter} km</span>
        <span>Rotation speed : {this.props.item.rotation_period} hours</span>
        <span>Orbital period: {this.props.item.orbital_period} days</span>
        <span>Gravity: {this.props.item.gravity} G</span>
        <span>Climate: {this.props.item.climate}</span>
        <span>Terrain : {this.props.item.terrain}</span>
        <span>Surface Water: {this.props.item.surface_water}%</span>
        <span>Population: {this.props.item.population} beigns</span>
      </div>
    );
  }
}

export default PlanetCard;
