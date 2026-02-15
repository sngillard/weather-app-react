import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  function toCelsius(f) {
    return ((f - 32) * 5) / 9;
  }

  let realFeelValue =
    props.unit === "fahrenheit"
      ? Math.round(props.data.realFeel)
      : Math.round(toCelsius(props.data.realFeel));

  let realFeelUnit = props.unit === "fahrenheit" ? "F" : "C";

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={56} />
            </div>

            <div className="float-left">
              <WeatherTemperature
                fahrenheit={props.data.temperature}
                unit={props.unit}
                onUnitChange={props.onUnitChange}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Real Feel: {realFeelValue}°{realFeelUnit}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
