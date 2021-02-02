import axios from "axios";

const keyApi = '5c2e7db91be800dca337ae2f4990971f';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

export const getWeather = async ({lat, lng}) => {

 /* const localWeatherData = localStorage.getItem(city);
  if (!localWeatherData) {

  } else {
    return localWeatherData;
  }*/

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
  const todayWeather = res.data.daily[0];
  const weatherIcon = currentData.weather[0].icon;
  const weatherDescription = currentData.weather[0].description;


  return {
    currentClouds: currentData.clouds,
    currentSunrise: new Date(currentData.sunrise * 1000),
    currentSunset: new Date(currentData.sunset * 1000),
    currentTemp: currentData.temp,
    tMin: todayWeather.temp.min,
    tMax: todayWeather.temp.max,
    weatherDescription,
    weatherIcon
  };
}