import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import PlanetCard from "../DataCards/PlanetCard";
import PeopleCard from "../DataCards/PeopleCard";
import ShipsCard from "../DataCards/ShipsCard";

import "./DataList.scss";
const DataList = (props) => {
  const [results, setResults] = useState([]);
  const [oneResult, setOneResult] = useState(Object);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    myRequest(props.endpoint);

    return setResults([]); // eslint-disable-next-line
  }, []);

  const myRequest = (endpoint) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://swapi.dev/api/${endpoint}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dataSet(result.results);
        setOneResult(result.results[0]);
      })
      .catch((error) => console.error(`error`, error));
  };
  const dataSet = (value) => {
    setResults(value);
    setIsLoaded(true);
  };

  return (
    <div className={"data"}>
      {isLoaded ? (
        <ul className={"data__list"}>
          {results.map((item, index) => {
            return (
              <li
                className={"data__item"}
                onClick={() => {
                  setOneResult(item);
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

      {props.planet && isLoaded ? (
        <PlanetCard item={oneResult} />
      ) : props.people && isLoaded ? (
        <PeopleCard item={oneResult} />
      ) : props.ship && isLoaded ? (
        <ShipsCard item={oneResult} />
      ) : (
        isLoaded === false && null
      )}
    </div>
  );
};

export default DataList;
