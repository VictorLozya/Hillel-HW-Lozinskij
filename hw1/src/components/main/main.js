import React, { useContext, useState } from "react";
import Nav from "../nav/nav";
import "./main.scss";
import DataList from "../DataList/DataList";
import { GlobalTheme } from "../../App";

const Main = () => {
  const [isPeoples, setIsPeoples] = useState(false);
  const [isPlanets, setIsPlanets] = useState(false);
  const [isShips, setIsShips] = useState(false);
  const context = useContext(GlobalTheme);

  const sectionToggling = (e) => {
    targetValidation(
      e,
      "Jedi",
      "isPeoples",
      setIsPeoples,
      setIsPlanets,
      setIsShips
    );
    targetValidation(
      e,
      "Planets",
      "isPlanets",
      setIsPlanets,
      setIsShips,
      setIsPeoples
    );
    targetValidation(
      e,
      "Ships",
      "isShips",
      setIsShips,
      setIsPeoples,
      setIsPlanets
    );
  };

  const targetValidation = (
    event,
    name,
    section,
    method,
    disabledSection,
    disabledSection2
  ) => {
    if (event.currentTarget.id === name) {
      method(true);
      disabledSection(false);
      disabledSection2(false);
    }
  };

  return (
    <div className={"container"}>
      <div className={context.themeLight ? "wrapper light" : "wrapper"}>
        <Nav sectionToggling={sectionToggling} />
        {isPeoples && <DataList people={isPeoples} endpoint={"people"} />}
        {isPlanets && <DataList planet={isPlanets} endpoint={"planets"} />}
        {isShips && <DataList ship={isShips} endpoint={"starships"} />}
        {!isShips && !isPlanets && !isPeoples && (
          <DataList people={true} endpoint={"people"} />
        )}
      </div>
    </div>
  );
};

export default Main;
