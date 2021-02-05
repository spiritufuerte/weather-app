import React, {useState} from 'react';
import SearchComponent from "./SearchComponent";
import {getWeather} from "../api/WeatherApi";
import classes from './Weather.module.css';

const Weather = () => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({
    currentTemp: 0,
    tMax: null,
    tMin: null,
    currentSunset: new Date(),
    currentSunrise: new Date(),
    currentClouds: 0,
    weatherIcon: '',
    weatherDescription: ''
  });

  const handleSearch = async ({city, lng, lat}) => {
    const result = await getWeather({lng, lat});
    setWeather(result);
    setCity(city);
  };

  function formatDate(date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();

    return day + ' ' + monthNames[monthIndex];
  }

  let date = formatDate(new Date());
  let src = `http://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`;

  return (
    <div className={classes.main}>
      <SearchComponent handleSearch={handleSearch}/>
      <div className={classes.info}>
        {weather.tMax ?
          <React.Fragment>
            <div className={classes.location}>
              <h1>{city}</h1>
              <h2>{date}</h2>
              <img src={src} alt="condition"/>
              <p>Weather condition: {weather.weatherDescription}</p>
            </div>
            <div className={classes.weather_wrapper}>
              <p>Temperature now: {weather.currentTemp} °C</p>
              <p>Min temperature today: {weather.tMin} °C</p>
              <p>Max temperature today: {weather.tMax} °C</p>
              <p>Sunset: {weather.currentSunset.getHours()}:{weather.currentSunset.getMinutes()}</p>
              <p>Sunrise: {weather.currentSunrise.getHours()}:{weather.currentSunrise.getMinutes()}</p>
              <p>Clouds: {weather.currentClouds}%</p>
            </div>
          </React.Fragment>
          : <h1> Wait</h1>
        }
      </div>
    </div>
  );
}

export default Weather;