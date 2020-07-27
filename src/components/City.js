import React from "react";
import { useHistory } from "react-router-dom";

function City({ city, handleDelete }) {
  const history = useHistory();
  const handleClick = (e) => {
    if (e.target.nodeName !== "BUTTON") {
      history.push(`/city/${city.id}`);
    }
  };
  return (
    <>
      <li className="card" onClick={handleClick}>
        <div className="card-header-wrapper">
          <p className="card-title">
            {city.name}, {city.sys.country}
          </p>
          <button className="delete-btn" onClick={handleDelete} value={city.id}>
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
