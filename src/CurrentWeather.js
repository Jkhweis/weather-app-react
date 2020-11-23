import React, { useState } from "react";
import "./CurrentWeather.css";
import Axios from "axios";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
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
            <li>Wednesday 07:00</li>
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
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    Axios.get(url).then(showTemperature);

    return "Loading";
  }
}
