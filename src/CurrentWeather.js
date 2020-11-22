import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <form class="form-inline">
        <div class="form-group mb-2"></div>
        <div class="form-group mx-sm-4 mb-6">
          <label for="inputPassword2" class="sr-only">
            Enter city
          </label>
          <input
            type="search"
            className="form-control"
            id="inputPassword2"
            placeholder="Enter city"
          />
        </div>
        <input
          type="submit"
          className="btn btn-info"
          id="city-button"
          value="Search"
        />
      </form>
      <br />
      <h1>London</h1>
      <div className="row" />
      <div className="col-6">
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: 12%</li>
          <li>Wind: 10km/hr</li>
        </ul>
      </div>
      <div className="row" />
      <div className="col-8">
        <span className="todayTemp" id="todayTemp"></span>
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
