import React from 'react'
import '../App.css';

function City(props) {

  return (
    <div className="city-container">
      <p className="text-left">{props.cityName}</p>
      <p className="text-right">{props.time}</p>
    </div>

  );
}

export default City;