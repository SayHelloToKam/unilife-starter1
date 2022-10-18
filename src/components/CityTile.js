import React from 'react'
import '../styles/citytile.css'

function CityTile({city}) {
  return (
    <div >
        <button className='tile-wrapper'>{city.name}</button> 
    </div>
  )
}

export default CityTile