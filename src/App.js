import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CitiesList from "./components/CitiesList";
import CityDetailed from "./components/CityDetailed";
import Alert from "./components/Alert";
import { fetchData } from "./api/index";

function App() {
  const initialCities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];
  // State

  const [cities, setCities] = useState(initialCities);
  const [cityQuery, setCityQuery] = useState("");
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // SetState
  const changeHandle = (e) => {
    setCityQuery(e.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      if (cityQuery.length <= 1) {
        throw Error("Query too short");
      }
      const data = await fetchData(cityQuery);
      if (cities.some((city) => city.sys.id === data.sys.id)) {
        throw Error("City already present in the list");
      }
      setCities([data, ...cities]);
      setCityQuery("");
    } catch (error) {
      setCityQuery("");
      setError(true);
      setErrorMessage(error.message);
    }
  };
  const handleDelete = (e) => {
    const modifiedCities = cities.filter((city) => city.id !== +e.target.value);
    setCities(modifiedCities);
  };

  // Side Effect
  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorMessage(null);
    }, 2000);
  }, [errorMessage]);
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  return (
    <div className="App">
      <Router>
        <h1>Weather</h1>
        <Switch>
          <Route path="/" exact>
            <SearchForm
              onChange={changeHandle}
              onClick={handleClick}
              cityQuery={cityQuery}
            />
            <Alert isError={isError} errorMessage={errorMessage} />
            <CitiesList cities={cities} handleDelete={handleDelete} />
          </Route>
          <Route path="/city/:id">
            <Alert isError={isError} errorMessage={errorMessage} />
            <CityDetailed
              setError={setError}
              setErrorMessage={setErrorMessage}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
