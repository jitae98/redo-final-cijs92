import React from "react";

const getWeatherImage = (weatherType) => {
  const iconList = [
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

  return (
    <div className="weather-image">
      <img
        src={iconList.find((item) => item.type === weatherType)?.img}
        alt={weatherType}
      />
    </div>
  );
};

const InfoWeather = ({ weatherData, iconList }) => {
  if (!weatherData) {
    return (
      <div className="weather-info">No data available. Please try again.</div>
    );
  }

  return (
    <div className="weather-info">
      <h2 className="city">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      {getWeatherImage(weatherData.weather[0].main)}
      <div className="temp">
        <p>Temperature: {weatherData.main.temp}°C</p>
      </div>
      <div className="other-details">
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      </div>
      <div className="description">
        <p>{weatherData.weather[0].description}</p>
      </div>
    </div>
  );
};

export default InfoWeather;
