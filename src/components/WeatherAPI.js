import React from "react";
import axios from "axios";
import { useState } from "react";

const api = {
  key: "5a24c1980ba5517e9c06f8d75c30c862",
  baseUrl: "https://api.openweathermap.org/data/2.5/", // weather?q={city name}&appid=5a24c1980ba5517e9c06f8d75c30c862
};

function WeatherAPI() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="WeatherAPI">
      <main>
        <div className="search-box">
          <input
            type=""
            className="search-bar"
            placeholder="Location"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box"></div>
        <div className="location">New York City</div>
        <div className="weather-box">
          <div className="temp">15</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default WeatherAPI;
