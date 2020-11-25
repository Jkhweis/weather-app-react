import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherSearch(props) {
  return (
    <div classname="WeatherDisplay">
      <h1>{props.data.city}</h1>
      <div className="row" />
      <div className="col-6">
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/hr</li>
        </ul>
      </div>
      <div className="row" />
      <div className="col-8">
        <span className="todayTemp">{Math.round(props.data.temperature)}</span>
        <span className="units">
          <span id="celcius-link" className="active">
            ° C{" "}
          </span>
          |<span id="fahrenheit-link">°F</span>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
