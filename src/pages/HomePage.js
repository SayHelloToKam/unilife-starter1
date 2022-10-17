import React from "react";
import Banner from "../components/Banner";
import TopCities from "../components/TopCities";
import FeatureBox from "../components/FeatureBox";
import "../styles/home.css";

function HomePage({ baseUrl }) {
  return (
    <div className='homepage-container'>
      <Banner
        headline='Find student homes with bills included'
        text='A simple and faster way to search for student accommodations'
      />
      <TopCities baseUrl={baseUrl} />
      <FeatureBox />
    </div>
  );
}

export default HomePage;
