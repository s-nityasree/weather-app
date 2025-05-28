import React, { useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const weatherIcons = {
    Clear: clear_icon,
    Clouds: cloud_icon,
    Drizzle: drizzle_icon,
    Rain: rain_icon,
    Snow: snow_icon,
  };

  const handleSearch = async () => {
    if (!city) return toast.warn("Please enter a city name");
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bb49765680c2903e5f13d2a58587548&units=metric`;
    try {
      const response = await axios.get(URL);
      setWeatherData(response.data);
    } catch (error) {
      toast.error("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  const getWeatherIcon = (main) => {
    return weatherIcons[main] || clear_icon;
  };

  return (
    <div className="weather-container">
      <ToastContainer />
      <div className="weather-card">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <img
            src={search_icon}
            alt="Search"
            onClick={handleSearch}
            className="search-icon"
          />
        </div>

        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <img
              src={getWeatherIcon(weatherData.weather[0].main)}
              alt="Weather Icon"
              className="main-icon"
            />
            <h1>{Math.round(weatherData.main.temp)}°C</h1>
            <p>{weatherData.weather[0].main}</p>
            <p className="weather-details">
              {weatherData.weather[0].description}
            </p>
            <div className="details">
              <div className="detail-item">
                <img src={humidity_icon} alt="Humidity" />
                <p>{weatherData.main.humidity}%</p>
              </div>
              <div className="detail-item">
                <img src={wind_icon} alt="Wind" />
                <p>{weatherData.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
