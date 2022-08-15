import './App.css'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './assets/logo.svg'



function App() {

  /*const randomLocation = Math.floor(Math.random() * (126-1) + 1)
  const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
  const location = useFetch(URL)*/
  //useState para capturar el valor de la input

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")
  /*const [planets, setPlanets] = useState()*/
  
  useEffect(() => {
    let randomLocation
    if (searchInput === "") {
      randomLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      randomLocation = searchInput
    }
    let url = `https://rickandmortyapi.com/api/location/${randomLocation}`
    axios.get(url)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
     /* console.log(url)*/
  }, [searchInput])
 /* let num
  const listNum=()=>{
    if (condition) {
      
    }
  }
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/'Earth (C-137)'")
     .then(res=> setPlanets(res.data))
     .catch(err=> console.log(err))
  }, [])
  console.log(planets)*/

  

  //Busquedar por imput
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }


  return (
    <div className="App">
      <div className='header'>
        <img className='logo' src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <input type="hidden-text" name="" id="search" />
          <button>Go</button>
        </form>
      </div>
      <div className='box'>
        <div className='locationBox'>
          <LocationInfo location={location} />
        </div>
        <div className='cardBox'>
          {
            location && location.residents.map(url => (
              <CardResident
                key={url}
                url={url}
              />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default App