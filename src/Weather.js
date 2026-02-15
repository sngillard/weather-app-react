import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("fahrenheit");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      realFeel: response.data.temperature.feels_like,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
    });
  }

  function search() {
    const apiKey = "8t518306o3b66f49626bf9e2c29fafe7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control searchForm"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn searchButton w-100"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} unit={unit} onUnitChange={setUnit} />
        <WeatherForecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
