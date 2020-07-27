import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchData } from "../api/index";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CityDetailed({ setError, setErrorMessage }) {
  const { id } = useParams();
  const [cityForecast, setCityForecast] = useState({});
  const history = useHistory();

  const formatDate = (date) => {
    const newDate = new Date(date);
    const dd = String(newDate.getDate()).padStart(2, "0");
    const mm = String(newDate.getMonth() + 1).padStart(2, "0");
    let hours = String(newDate.getHours());

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = `${hours}${ampm}`;
    return `${dd}/${mm} ${strTime} `;
  };
  const formatTemperature = (value) => [`${value} ‎°C`, `Temperature`];
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData(id, true);
        setCityForecast(data);
        console.log(data);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    })();
  }, [id]);

  return (
    <>
      {cityForecast.city ? (
        <div className="card-max">
          <h4>
            {cityForecast.city.name}, {cityForecast.city.country}
          </h4>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={cityForecast.list}
              margin={{
                top: 30,
                right: 20,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="dt_txt"
                tickFormatter={formatDate}
                tick={{ fontSize: 10 }}
              />
              <YAxis />
              <Tooltip
                labelFormatter={formatDate}
                formatter={formatTemperature}
              />
              <Area
                type="monotone"
                dataKey="main.temp"
                stroke="rgb(94, 72, 16)"
                fill="darkgoldenrod"
              />
            </AreaChart>
          </ResponsiveContainer>
          <button className="btn" onClick={() => history.goBack()}>
            Go Back
          </button>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default CityDetailed;
