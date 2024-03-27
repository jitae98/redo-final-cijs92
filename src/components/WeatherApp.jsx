import React, { useEffect, useState } from "react";
import Search from "./Search";
import InfoWeather from "./InfoWeather";

const icons = [
  {
    type: "Clear",
    img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
  },
  {
    type: "Rain",
    img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
  },
  {
    type: "Snow",
    img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
  },
  {
    type: "Clouds",
    img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  },
  {
    type: "Haze",
    img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
  },
  {
    type: "Smoke",
    img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
  },
  {
    type: "Mist",
    img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
  },
  {
    type: "Drizzle",
    img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
  },
];

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async (_city) => {
    const apiKey = "874bd9de85c16024fb4fb064fb00e949";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${_city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Invalid city name or city not found. Please try again.");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchData(city);
  }, [city]);

  return (
    <div className="weather-app">
      <div className="search-container">
        <Search onSetCity={setCity} />
        {errorMessage && <p className="error">{errorMessage}</p>}
        {weatherData && (
          <InfoWeather weatherData={weatherData} iconList={icons} />
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
