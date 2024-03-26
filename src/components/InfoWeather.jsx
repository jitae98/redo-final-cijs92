import React from "react";

const getWeatherImage = (weatherType) => {
  const weatherIconList = [
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

  const weatherImg = weatherIconList.find((item) => item.type === weatherType);

  return weatherImg ? weatherImg.img : "";
};

const InfoWeather = ({ weatherData }) => {
  const { main, name, sys, weather } = weatherData;

  const image = getWeatherImage(weather[0].main);

  return (
    <div className="weather-info">
      <h2 className="city">
        {name}, {sys.country}
      </h2>
      <div className="weather-image">
        <img src={image} alt={weather[0].main} />
      </div>
      <div className="temp">
        <p>Temperature: {main.temp}°C</p>
      </div>
      <div className="other-details">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {sys.windspeed}m/s</p>
      </div>
      <div className="description">
        <p>{weather[0].description}</p>
      </div>
    </div>
  );
};

export default InfoWeather;
