import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCGzMDw4iq6loLNXllX9mIHyQdlP1kz-pg");

export function getCoordinatesByCity(city) {
  return new Promise((resolve, reject) => {
    const key = `city/${city}`;
    const coordinates = localStorage.getItem(key);
    if (coordinates) {
      resolve(JSON.parse(coordinates));
      return;
    }

    Geocode.fromAddress(city).then(
      response => {
        const coordinates = response.results[0].geometry.location;
        localStorage.setItem(key, JSON.stringify(coordinates));
        resolve(coordinates);
      },
      error => {
        console.error(error);
        reject(error);
      }
    )
  });
}

export function getCityByCoordinates(lat, lng) {
  return new Promise((resolve, reject) => {
    const key = `coordinate/${lat},${lng}`;
    const city = localStorage.getItem(key);
    if (city) {
      resolve(city);
      return;
    }

    Geocode.fromLatLng(lat, lng).then(
      response => {
        const city = response.results[0].address_components[3].short_name;
        localStorage.setItem(key, city);
        resolve(city);
      },
      error => {
        console.error(error);
        reject(error);
      }
    )
  });
}