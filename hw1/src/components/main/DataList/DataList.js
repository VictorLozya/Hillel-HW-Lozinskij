import React, { Component } from "react";
import { DotLoader } from "react-spinners";
import PlanetCard from "../DataCards/PlanetCard";
import PeopleCard from "../DataCards/PeopleCard";
import ShipsCard from "../DataCards/ShipsCard";

import "./DataList.scss";
class DataList extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      item: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.myRequest(this.props.endpoint);
  }
  componentWillUnmount() {
    this.setState({
      results: null,
    });
  }
  oneResultSet = (value) => {
    this.setState({
      item: value,
    });
  };

  myRequest = (endpoint) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://swapi.dev/api/${endpoint}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.dataSet(result.results);
        this.oneResultSet(result.results[0]);
      })
      .catch((error) => console.error(`error`, error));
  };
  dataSet = (value) => {
    this.setState({
      results: value,
      isLoaded: true,
    });
  };
  render() {
    return (
      <div className={"data"}>
        {this.state.isLoaded ? (
          <ul className={"data__list"}>
            {this.state.results.map((item, index) => {
              return (
                <li
                  className={"data__item"}
                  onClick={() => {
                    this.oneResultSet(item);
                  }}
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={"load-wrapper"}>
            <DotLoader color={"#B92970"} />
          </div>
        )}

        {this.props.planet && this.state.isLoaded ? (
          <PlanetCard item={this.state.item} />
        ) : this.props.people && this.state.isLoaded ? (
          <PeopleCard item={this.state.item} />
        ) : this.props.ship && this.state.isLoaded ? (
          <ShipsCard item={this.state.item} />
        ) : (
          this.state.isLoaded === false && null
        )}
      </div>
    );
  }
}

export default DataList;
