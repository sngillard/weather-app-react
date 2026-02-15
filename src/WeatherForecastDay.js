import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function toCelsius(f) {
    return ((f - 32) * 5) / 9;
  }

  function maxTemperature() {
    let f = Math.round(props.data.temperature.maximum);
    let value = props.unit === "fahrenheit" ? f : toCelsius(f);
    return `${Math.round(value)}°`;
  }

  function minTemperature() {
    let f = props.data.temperature.minimum;
    let value = props.unit === "fahrenheit" ? f : toCelsius(f);
    return `${Math.round(value)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
