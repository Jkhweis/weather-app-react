import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./CurrentWeather.css";

export default function WeatherSearch(props) {
  return (
    <div classname="WeatherSearch">
      <h2>
        <FormatDate date={props.data.date} />{" "}
      </h2>
      <h1>{props.data.city}</h1>
      <h3 className="text-capitalize">{props.data.description}</h3>
      <div className="row mt-3">
        <div className="col-12">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div>
        <div className="col-8">
          <ul className="HumidityWind">
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
