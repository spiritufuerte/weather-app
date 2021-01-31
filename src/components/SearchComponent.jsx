import React, {useRef, useEffect} from 'react';
import './SearchComponent.css';
import {getCoordinatesByCity, getCityByCoordinates} from "../api/GeocodeApi";

const SearchComponent = ({handleSearch}) => {
  const ref = useRef(null);

  const handlerSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const city = ref.current.value;
    const {lat, lng} = await getCoordinatesByCity(city);
    handleSearch({city, lat, lng});

  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        ref.current.value = await getCityByCoordinates(position.coords.latitude, position.coords.longitude);
        await handlerSubmit(null);
      }
    );
  }, [])


  return (
    <form className="form" onSubmit={handlerSubmit}>
      <div className="input_wrapper">
        <input type="text" placeholder="Search contact" ref={ref}/>
      </div>
    </form>
  )
}

export default SearchComponent;