import React from 'react';
import './SearchComponent.css';

const SearchComponent = () => {

const handlerSearch = (e) => {
  console.log('atata');
}

  return (
    <form className="form">
      <div className="input_wrapper">
        <input type="text" placeholder="Search contact" onKeyUp={handlerSearch}/>
      </div>
    </form>
  )
}

export default SearchComponent;