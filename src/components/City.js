import React from "react";

function City({ city, deleteHandle }) {
  return (
    <>
      <li className="card">
        <div className="card-header-wrapper">
          <p className="card-title">
            {city.name}, {city.sys.country}
          </p>
          <button className="delete-btn" onClick={deleteHandle} value={city.id}>
            x
          </button>
        </div>
        <div className="card-overview">
          <p className="card-overview-main">{city.weather[0].main}</p>
          <p>{city.weather[0].description}</p>
        </div>
        <div className="card-detail">
          <p>
            min temp: {Math.round(city.main.temp_min)}
            °C
          </p>
          <p>
            max temp: {Math.round(city.main.temp_max)}
            °C
          </p>
          <p>
            location: {city.coord.lon}, {city.coord.lat}
          </p>
        </div>
      </li>
    </>
  );
}

export default City;
