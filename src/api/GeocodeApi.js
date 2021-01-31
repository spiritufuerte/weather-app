import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCGzMDw4iq6loLNXllX9mIHyQdlP1kz-pg");

export function getCoordinatesByCity(city) {
  return new Promise((resolve, reject) => {
    Geocode.fromAddress(city).then(
      response => {
        resolve(response.results[0].geometry.location)
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
    Geocode.fromLatLng(lat, lng).then(
      response => {
        resolve(response.results[0].address_components[3].short_name)
      },
      error => {
        console.error(error);
        reject(error);
      }
    )
  });
}