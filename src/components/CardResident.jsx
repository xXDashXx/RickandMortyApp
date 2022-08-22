import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
  const resident = useFetch(url)
  console.log(resident)
  return (
    <div className='cardContainer'>
      <div className='cards'>
        <header>
          <img src= {resident?.image} alt= {`image of ${resident?.name}`} />
          <div>
            <div className='circle'></div>
            <span className='nameResident'> {resident?.name} </span>
            <span className='status'>{`${'Status:'} ${resident?.status}`} </span>
          </div>
        </header>
        <div className='cardList'>
          <ul className='ulList'>
              <li><span>Specie:</span> 
              <span>{resident?.species} </span></li>
              <li><span>Origin:</span>
              <span> {resident?.origin.name} </span></li>
              <li><span>Eppisodes where appear:</span>
              <span> {resident?.episode.length} </span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardResident