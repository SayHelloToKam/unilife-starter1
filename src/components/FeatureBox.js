import React from 'react'
import '../styles/featureBox.css'
import { TbListSearch } from "react-icons/tb";
import { MdChecklistRtl } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";

function FeatureBox() {
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
    </div>
  )
}

export default FeatureBox