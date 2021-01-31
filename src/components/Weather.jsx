import React, {useEffect, useState} from 'react';
import SearchComponent from "./SearchComponent";
import {getWeather} from "../api/WeatherApi";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({
    currentTemp: 0,
    tMax: 0,
    tMin: 0,
    currentSunset: new Date(),
    currentSunrise: new Date(),
    currentClouds: 0,
    weatherIcon: '',
    todayWeather: 0
  });

  const handleSearch = async ({city, lng, lat}) => {
    const result = await getWeather({lng, lat});
    setWeather(result);
    setCity(city);
  };

  return (
    <div>
      <SearchComponent handleSearch={handleSearch}/>
      <div>
        <h1>{city}</h1>
        <h2>Time</h2>
      </div>
      <div>Temperature now: {weather.currentTemp}</div>
      <div>tMin: {weather.tMin}</div>
      <div>tMax: {weather.tMax}</div>
      <div>Sunset: {weather.currentSunset.getHours()}:{weather.currentSunset.getMinutes()}</div>
      <div>Sunrise: {weather.currentSunrise.getHours()}:{weather.currentSunrise.getMinutes()}</div>
      <div>Clouds: {weather.currentClouds}%</div>
    </div>
  );
}

export default Weather;