import React from 'react'
import FeatureBox from './FeatureBox'
import SeachHero from './SeachHero'
import TopCities from './TopCities'
import '../styles/home.css'

function HomePage() {
  return (
    <div className='homepage-container'>
        <SeachHero/>
        <TopCities/>
        <FeatureBox/>
    </div>
  )
}

export default HomePage