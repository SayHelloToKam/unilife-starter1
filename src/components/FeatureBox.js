import React from 'react'
import '../styles/featureBox.css'
import { TbListSearch } from "react-icons/tb";
import { MdChecklistRtl, MdOutlineHouse } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import featureImage from "../assets/person.png";

function FeatureBox() {

  const featureStyle = {
    display: "flex",
    justifyContent: "center",
    height: "400px",
    width: "400px",
    backgroundImage: `url(${featureImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <div className='feature-container'>
      <div className='light-blue-container'>
        <h2>Compare all inclusive student homes.</h2>
        <div className='feature-items'>
          <div className='feature'>
            <p className='feature-icon'><TbListSearch/></p>
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className='feature'>
            <p className='feature-icon'><MdChecklistRtl/></p>
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className='feature'>
            <p className='feature-icon'><RiFilePaper2Line/></p>
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
      </div>

      <div className='feature-white-container'>
        
        <div className="bottom-feature-left">
        <div className='feature-item-left'>
          <p className='feature-little-icon'><MdOutlineHouse/></p>
          <div>
            <h3 className='heading-text'>Best Selection</h3>
            <p className='basic-text'>Best selection of student accommodations. Never been easier to find a home that's right for you.</p>
          </div>
        </div>

        <div className='feature-item-left'>
            <p className='feature-little-icon'><MdOutlineHouse/></p>
            <div>
              <h3 className='heading-text'>Your favorite</h3>
              <p className='basic-text'>Shortlist your favorite properties and send enquiries in one click.</p>
              <button className='feature-button'>Search & Compare</button>
            </div>
        </div>

        </div>
        <div className='feature-img' style={featureStyle}>
          
        </div>
      </div>

    </div>
  )
}

export default FeatureBox