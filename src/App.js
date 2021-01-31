import React from 'react';
import './App.css';
import Weather from "./components/Weather";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <div>
      <SearchComponent/>
      <Weather/>
    </div>

  );
}

export default App;
