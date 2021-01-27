import React, {useEffect, useState} from 'react';
import './App.css';
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
  const currentTime = new Date(currentData.dt).toLocaleTimeString(undefined);
  const currentSunrise =currentData.sunrise;
  const currentSunset = currentData.sunset;
  const currentTemp = currentData.temp;
  const weatherIcon = currentData.weather;
  const todayWeather = res.data.daily[0];
  const tMax = todayWeather.temp.max;
  const tMin = todayWeather.temp.min;
  const all = res.data;

  return {currentClouds, currentTime, currentSunrise, currentSunset, currentTemp, all, tMin, tMax};
}


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getWeather();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('data', data);
  }, [data])
  return (
    <div>

    </div>
  );
}

export default App;
