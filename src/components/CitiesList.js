import React from "react";
import City from "./City";

function CitiesList({ cities, isError, errorMessage, deleteHandle }) {
  return (
    <>
      {isError && <div className="error-message">{errorMessage}</div>}

      {cities.map((city, index) => {
        return <City city={city} key={index} deleteHandle={deleteHandle} />;
      })}
    </>
  );
}

export default CitiesList;
