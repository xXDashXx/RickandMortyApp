import React from 'react'

const LocationInfo = ({location}) => {
  console.log(location)
  return (
    <article className='locationInfo'>
        <ul className='listLocation'>
          <li><span className='titleLocation'>Name:</span>
          <span> {location?.name} </span></li>
          <li><span className='titleLocation'>Type:</span>
          <span> {location?.type} </span></li>
          <li><span className='titleLocation'>Dimension:</span>
          <span>{location?.dimension} </span></li>
          <li><span className='titleLocation'>Population:</span>
          <span>{location?.residents.length} </span></li>  
        </ul>
    </article>
  )
}

export default LocationInfo