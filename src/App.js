import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CitiesList from "./components/CitiesList";
import Alert from "./components/Alert";

const { api_key } = require("./config/config");

function App() {
  // State
  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_LINK = `&appid=${api_key}`;
  const [cities, setCities] = useState([]);
  const [cityQuery, setCityQuery] = useState("");
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // SetState
  const changeHandle = (e) => {
    setCityQuery(e.target.value);
  };
  const clickHandle = (e) => {
    e.preventDefault();
    const fetchURL = `${URL}q=${cityQuery}&units=metric${API_LINK}`;
    fetchData(fetchURL);
  };
  const deleteHandle = (e) => {
    const modifiedCities = cities.filter((city) => city.id !== +e.target.value);
    setCities(modifiedCities);
  };

  const fetchData = async (fetchLink) => {
    try {
      setError(false);
      if (cityQuery.length <= 1) {
        throw Error("Query too short");
      }

      const response = await axios.get(fetchLink);
      if (cities.some((city) => city.sys.id === response.data.sys.id)) {
        throw Error("City already present in the list");
      }
      setCities([response.data, ...cities]);
      setCityQuery("");
    } catch (error) {
      setCityQuery("");
      setError(true);
      if (error.response) {
        const { message } = error.response.data;
        setErrorMessage(message);
      } else if (error.request) {
        setErrorMessage(error);
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  // Side Effect
  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorMessage(null);
    }, 2000);
  }, [errorMessage]);

  return (
    <div className="App">
      <h1>Weather</h1>
      <SearchForm
        onChange={changeHandle}
        onClick={clickHandle}
        cityQuery={cityQuery}
      />
      <Alert isError={isError} errorMessage={errorMessage} />
      <CitiesList cities={cities} deleteHandle={deleteHandle} />
    </div>
  );
}

export default App;
