import React from 'react'
import Banner from '../components/Banner'
import CitySearch from '../components/CitySearch'

function AllCitiesPage({baseUrl}) {
  return (
    <div >
      <Banner
        headline='Search Accommodation'
        text='Whatever youre after, we can help you find the right student accommodation for you.'
      />
      <CitySearch baseUrl={baseUrl} />
    </div>
  )
}

export default AllCitiesPage