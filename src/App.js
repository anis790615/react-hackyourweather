import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import SearchForm from "./components/SearchForm";
import City from "./components/City";
const {port} = require("./config/config");

function App() {
    // State
    const URL = "http://api.openweathermap.org/data/2.5/weather?";
    const API_LINK = `&appid=${port}`;
    const [city, setCity] = useState({});
    const [cityQuery, setCityQuery] = useState("");
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoaded, setLoaded] = useState(false);
    const [fetchLink, setFetchLink] = useState("");
    // SetState
    const changeHandle = (e) => {
        setCityQuery(e.target.value);
    };
    const clickHandle = (e) => {
        e.preventDefault();

        setFetchLink(`${URL}q=${cityQuery}&units=metric${API_LINK}`);
    };
    // Side Effect
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoaded(false);
                setError(false);
                const response = await axios.get(fetchLink);
                setCity(response.data);
                setLoaded(true);
                setCityQuery("");
            } catch (error) {
                setError(true);
                if (error.response) {
                    const {message} = error.response.data;
                    setErrorMessage(message);
                } else if (error.request) {
                    console.log(error);
                    setErrorMessage(error);
                }
            }
        };
        if (fetchLink !== "") {
            fetchData();
        }
    }, [fetchLink]);

    return (
        <div className="App">
            <h1>Weather</h1>
            <SearchForm
                onChange={changeHandle}
                onClick={clickHandle}
                cityQuery={cityQuery}
            />
            <City
                city={city}
                loaded={isLoaded}
                isError={isError}
                errorMessage={errorMessage}
            />
        </div>
    );
}

export default App;
