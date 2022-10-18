import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CityTile from '../components/CityTile'
import '../styles/citytile.css'

function CitySearch({baseUrl}) {

const [cityNames, setCityNames] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/cities?limit=24`)
      .then((res) => {
        setCityNames(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
        <h1>Search by City</h1>
        <div className='tile-container'>

          {
            cityNames.map(city=>{
              return <CityTile city={city}/>
            })
          }
        </div>
      
    </div>
  )
}

export default CitySearch