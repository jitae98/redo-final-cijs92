import React, { useState, useEffect } from "react";

const Search = ({ city }) => {
  const apiKey = "874bd9de85c16024fb4fb064fb00e949";
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("City not found, please try again");
        })
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, [city, apiKey]);

  const getImageSrc = (main) => {
    switch (main) {
      case "Clear":
        return "img/clear.png";
      case "Rain":
        return "img/rain.gif";
      case "Clouds":
        return "img/clouds.gif";
      case "Snow":
        return "img/snow.gif";
      default:
        return "img/not-available.gif";
    }
  };

  return (
    <div className="search">
      Search
      {city && (
        <>
          <div className="search-location">
            <span className="location">{weather.name}</span>
          </div>
          <div className="search-weather-details">
            <img
              src={getImageSrc(weather.weather[0].main)}
              alt={weather.weather[0].main}
              className="search-weather-image"
            />
            <div className="search-temperature">
              <span className="temperature">
                {weather.main.temp.toFixed(0)}&#x2103;
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
