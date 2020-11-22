import "./App.css";
import CurrentWeather from "./CurrentWeather";
import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather />
        <footer>
          <a href="https://github.com/Jkhweis/weather-app-react" target="blank">
            Open Source Code
          </a>
          by Joy Khweis
        </footer>
      </div>
    </div>
  );
}
