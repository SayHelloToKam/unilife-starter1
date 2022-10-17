import React, { useState, useEffect } from "react";
import "../styles/topCities.css";

import axios from "axios";
import CityCard from "./CityCard";

function TopCities({ baseUrl }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/cities?limit=9`)
      .then((res) => {
        setCities(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='top-cities-wrapper'>

      <div className="search-box">
        <input type="text"placeholder="Search by city"></input>
        <input type="text"placeholder="Any bedroom"></input>
        <button>Find Homes</button>
      </div>
      
      <h1>Student accommodations in our top cities</h1>
      <div className='cities-container'>
          {
            cities.map(city=>{
              return <CityCard city={city}/>
            })
          }
      </div>
      <div className="see-all-button">
        <button>See All Cities</button>
      </div>
      
    </div>
  );
}

export default TopCities;
