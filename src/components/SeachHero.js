import React from 'react'
import '../styles/searchHero.css'
import bkgImage from '../assets/cover-img.png'

function SeachHero() {

  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    height:"480px",
    width:"100%",
    backgroundImage:`url(${bkgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
}

  return (
    <div className='hero-container' style={heroStyle}>
      <div className='hero-overlay'>
      <div className='hero-text'>
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to search for student accommodations</p>
      </div>
      </div>
      
    </div>
  )
}

export default SeachHero