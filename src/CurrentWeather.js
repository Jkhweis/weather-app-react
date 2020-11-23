import React, { useState } from "react";
import "./CurrentWeather.css";
import Axios from "axios";
import FormatDate from "./FormatDate";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <form className="form-inline">
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
        <h1>{weatherData.city}</h1>
        <div className="row" />
        <div className="col-6">
          <ul>
            <li>
              <FormatDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/hr</li>
          </ul>
        </div>
        <div className="row" />
        <div className="col-8">
          <span className="todayTemp">
            {Math.round(weatherData.temperature)}
          </span>
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
  } else {
    const apiKey = "28f52080b9de7ad64256839acc8afe17";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    Axios.get(url).then(showTemperature);

    return "Loading";
  }
}
