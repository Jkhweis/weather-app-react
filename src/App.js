import "./App.css";
import CurrentWeather from "./CurrentWeather";
import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <CurrentWeather defaultCity="Chicago" />
      </div>
      <footer>
        Created by
        <a
          href="https://www.linkedin.com/in/joy-khweis-bb91b0198/"
          target="blank"
        >
          {" "}
          Joy Khweis{" "}
        </a>
        and open-sourced on
        <a href="https://github.com/Jkhweis/weather-app-react" target="blank">
          {" "}
          Github{" "}
        </a>
      </footer>
    </div>
  );
}
