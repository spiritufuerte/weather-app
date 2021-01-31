import React, {useRef} from 'react';
import './SearchComponent.css';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCGzMDw4iq6loLNXllX9mIHyQdlP1kz-pg");

const SearchComponent = ({handleSearch}) => {
  const ref = useRef(null);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const city = ref.current.value;
    Geocode.fromAddress(city).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        handleSearch({city, lat, lng});
      },
      error => {
        console.error(error);
      }
    );

  }


  return (
    <form className="form" onSubmit={handlerSubmit}>
      <div className="input_wrapper">
        <input type="text" placeholder="Search contact" ref={ref}/>
      </div>
    </form>
  )
}

export default SearchComponent;