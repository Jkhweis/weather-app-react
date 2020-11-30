import React, { useState } from "react";
import "./CurrentWeather.css";
import Axios from "axios";
import WeatherSearch from "./WeatherSearch";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, SetCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    SetCity(event.target.value);
  }

  function search() {
    const apiKey = "28f52080b9de7ad64256839acc8afe17";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    Axios.get(url).then(showTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group mb-2"></div>
          <div className="form-group mx-sm-4 mb-6">
            <label for="inputPassword2" class="sr-only">
              Enter city
            </label>
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
              onChange={handleCityChange}
            />
          </div>
          <input type="submit" className="btn btn-info" value="Search" />
        </form>
        <br />
        <WeatherSearch data={weatherData} />
        <br />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="Rings"
        color="#2a5974"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
