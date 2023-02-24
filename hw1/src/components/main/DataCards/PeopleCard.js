import React, { Component } from "react";

class DataCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <span>Birth Date : {this.props.item.birth_year}</span>
        <span>Height : {this.props.item.height}</span>
        <span>Mass : {this.props.item.mass}</span>
        {this.props.item.gender !== "n/a" ? (
          <div className={`appearence`}>
            <span>Gender : {this.props.item.gender}</span>
            <span>Hair color : {this.props.item.hair_color}</span>
            <span>Eye color : {this.props.item.eye_color}</span>
            <span>Skin color : {this.props.item.skin_color}</span>
          </div>
        ) : (
          <span>Robot</span>
        )}
      </div>
    );
  }
}

export default DataCard;
