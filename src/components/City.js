import React from "react";

function City({city, loaded, isError, errorMessage}) {
    return (
        <>
            {isError && <div className="error-message">{errorMessage}</div>}
            {loaded && (
                <li className="card">
                    <div className="card-title">
                        {city.name}, {city.sys.country}
                    </div>
                    <div className="card-overview">
                        <p className="card-overview-main">
                            {city.weather[0].main}
                        </p>
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
            )}
        </>
    );
}

export default City;
