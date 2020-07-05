import React from "react";
import City from "./City";

function CitiesList({cities}) {
    return (
        <>
            <ul>
                {cities.map((city, index) => {
                    return <City city={city} key={index} />;
                })}
            </ul>
        </>
    );
}

export default CitiesList;
