import React from "react";
import City from "./City";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function CitiesList({ cities, handleDelete }) {
  return (
    <TransitionGroup>
      {cities.map((city, index) => (
        <CSSTransition classNames="fade" timeout={300} key={index}>
          <City city={city} handleDelete={handleDelete} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default CitiesList;
