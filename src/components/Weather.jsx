import React, {useEffect, useState} from 'react';
import axios from "axios";

const keyApi = '5c2e7db91be800dca337ae2f4990971f';
const lat = 49.8383;
const lon = 24.0232;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

export const getWeather = async () => {

  /*
    const res = await instance.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${keyApi}`);
  */

  const res = await instance.get(`/onecall`, {
    params: {
      lat: lat,
      lon: lon,
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await getWeather();
      setWeather(result);
    };
    fetchData();

  }, []);

  useEffect(() => {
    console.log(weather)
  }, [weather])
  return (
    <div>
      <div>
        <h1>Lviv, UA</h1>
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