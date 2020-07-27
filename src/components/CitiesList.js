import React from "react";
import City from "./City";

function CitiesList({ cities, isError, errorMessage, handleDelete }) {
  return (
    <>
      {isError && <div className="error-message">{errorMessage}</div>}

      {cities.map((city, index) => {
        return <City city={city} key={index} handleDelete={handleDelete} />;
      })}
    </>
  );
}

export default CitiesList;
