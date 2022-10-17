import React from 'react'
import '../styles/citycard.css'

function CityCard({city}) {

const cardStyle = {
    backgroundImage: `url('${city.image_url}')`,
    width: "400px",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "18px",
    margin: "10px"
}
 const overlayStyle = {
    background: "rgb(11,11,13,0.5)",
    height: "100%",
    width: "100%",
    borderRadius: "18px",    
 }

  return (
    <div className='city-wrapper'>
        <div style={cardStyle}>
            <div className='city-card-container' style={overlayStyle}>
                <h1>{city.name}</h1>
                <p>{city.property_count} properties</p>
            </div>
        </div>
    </div>
  )
}

export default CityCard