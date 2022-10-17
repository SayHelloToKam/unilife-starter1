import React from "react";
import "../styles/banner.css";
import bkgImage from "../assets/cover-img.png";

function Banner({ headline, text }) {
  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    height: "480px",
    width: "100%",
    backgroundImage: `url(${bkgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <div className='hero-container' style={heroStyle}>
      <div className='hero-overlay'>
        <div className='hero-text'>
          <h1>{headline}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
