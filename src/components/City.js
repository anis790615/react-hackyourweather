import React from "react";

function City({city}) {
    return (
        <li className="card">
            <div className="card-title">
                {city.name}, {city.sys.country}
            </div>
            <div className="card-overview">
                <p className="card-overview-main">{city.weather[0].main}</p>
                <p>{city.weather[0].description}</p>
            </div>
            <div className="card-detail">
                <p>
                    min temp:{" "}
                    {Math.round((city.main.temp_min - 273.15) * 10) / 10}°C
                </p>
                <p>
                    man temp:{" "}
                    {Math.round((city.main.temp_max - 273.15) * 10) / 10}°C
                </p>
                <p>
                    location: {city.coord.lon}, {city.coord.lat}
                </p>
            </div>
        </li>
    );
}

export default City;
