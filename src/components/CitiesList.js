import React from "react";
import City from "./City";

function CitiesList({ cities, handleDelete }) {
  return (
    <>
      {cities.map((city, index) => {
        return <City city={city} key={index} handleDelete={handleDelete} />;
      })}
    </>
  );
}

export default CitiesList;
