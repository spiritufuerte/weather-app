import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchComponent from "./SearchComponent";
import Geocode from "react-geocode";

const keyApi = '5c2e7db91be800dca337ae2f4990971f';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

export const getWeather = async ({lat, lng}) => {

  /*
    const res = await instance.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${keyApi}`);
  */

  const res = await instance.get(`/onecall`, {
    params: {
      lat: lat,
      lon: lng,
      exclude: ["hourly", "alerts"],
      units: "metric",
      appid: keyApi
    }
  });
  const currentData = res.data.current;

  const currentClouds = currentData.clouds;
  const currentSunrise =currentData.sunrise;
  const currentSunset = currentData.sunset;
  const currentTemp = currentData.temp;
  const weatherIcon = currentData.weather;
  const todayWeather = res.data.daily[0];
  const tMax = todayWeather.temp.max;
  const tMin = todayWeather.temp.min;
  const all = res.data;

  return {currentClouds, currentSunrise, currentSunset, currentTemp, all, tMin, tMax, weatherIcon, todayWeather};
}





const Weather = () => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({
    currentTemp: 0,
    tMax: 0,
    tMin: 0,
    currentSunset: 0,
    currentSunrise: 0,
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
      <div>Sunset: {weather.currentSunset}</div>
      <div>Sunrise: {weather.currentSunrise}</div>
      <div>Clouds: {weather.currentClouds}%</div>
    </div>
  );
}

export default Weather;