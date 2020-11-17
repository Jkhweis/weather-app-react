import "./App.css";
import "./CurrentWeather.css";

export default function App() {
  return (
    <div className="App">
      <form class="form-inline">
        <div class="form-group mb-2"></div>
        <div class="form-group mx-sm-4 mb-6">
          <label for="inputPassword2" class="sr-only">
            Enter city
          </label>
          <input
            type="search"
            class="form-control"
            id="inputPassword2"
            placeholder="Enter city"
          />
        </div>
        <input
          type="submit"
          class="btn btn-info"
          id="city-button"
          value="Search"
        />
      </form>
      <ul>
        <li class id="todaysDate"></li>
        <li class id="todaysCondition"></li>
        <li>
          Humidity: <span id="humidityData"></span>%
        </li>
        <li>
          Wind: <span id="windData"></span> km/hr
        </li>
      </ul>
      <div className="row" />
      <div className="col-8">
        <div className="weather-temperature">
          <img src="" alt="clear" id="todayIcon" className="float-left" />

          <span className="todayTemp" id="todayTemp"></span>
          <span className="units">
            <a href="#" id="celcius-link" className="active">
              ° C{" "}
            </a>
            |
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </span>
          <br />
          <br />

          <footer>
            <a href="https://github.com/Jkhweis/weather-app" target="blank">
              Open Source Code Test
            </a>
            by Joy Khweis
          </footer>
        </div>
      </div>
    </div>
  );
}
