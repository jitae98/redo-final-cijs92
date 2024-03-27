import React, { useState, useEffect } from "react";

const Search = () => {
  const apiKey = "your_api_key_here"; // Replace this with your actual API key.
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async (city) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        alert("City not found, please try again");
      }
    };

    const city = "Seoul";
    fetchWeather(city);
  }, []);

  const getImageSrc = (main) => {
    switch (main) {
      case "Clear":
        return ".png";
      case "Rain":
        return ".gif";
      case "Clouds":
        return ".gif";
      case "Snow":
        return ".gif";
      default:
        return ".gif";
    }
  };

  const city = (weather && weather?.main?.city) || "";

  return (
    <div className="search">
      <div className="search-location">
        <span className="location">{city}</span>
      </div>
      <div className="search-weather-details">
        <div className="search-weather-image">
          {weather && (
            <img
              src={require(`../img/${getImageSrc(
                weather?.weather[0]?.main
              )}.png`)}
              alt={weather?.weather[0]?.main}
            />
          )}
        </div>
        <div className="search-temperature">
          {weather && (
            <span className="temperature">
              {weather?.main?.temp.toFixed(0)}&#x2103;
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
