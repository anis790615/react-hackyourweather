import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import CitiesList from "./components/CitiesList";

function App() {
    const URL = "city-weather.json";
    const [cities, setCities] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(URL);
            setCities(response.data);
        };
        fetchData();
    }, []);
    // console.log(cities);
    // const [cities, setCities] = useState(initialCityList);

    return (
        <div className="App">
            <h1>Weather</h1>
            <CitiesList cities={cities} />
        </div>
    );
}

export default App;
