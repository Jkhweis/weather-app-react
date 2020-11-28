import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
      <div className="row mt-3">
        <div className="col-6">
          <div ClassName="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/hr</li>
        </ul>
      </div>
    </div>
  );
}
