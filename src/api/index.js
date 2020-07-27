import axios from "axios";

const { api_key } = require("../config/config");

const URL = "https://api.openweathermap.org/data/2.5/";
const FETCH_DATA = `&units=metric&appid=${api_key}`;

export const fetchData = async (city, forecast) => {
  let fetchUrl;
  if (forecast) {
    fetchUrl = `${URL}forecast?id=${city}${FETCH_DATA}`;
    console.log(fetchUrl);
  } else {
    fetchUrl = `${URL}weather?q=${city}${FETCH_DATA}`;
  }
  try {
    const { data } = await axios.get(fetchUrl);
    return data;
  } catch (error) {
    let message;
    if (error.response) {
      message = error.response.data.message;
    } else if (error.request) {
      message = error;
    }
    throw Error(message);
  }
};
