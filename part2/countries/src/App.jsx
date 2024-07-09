import { useState,useEffect } from 'react'
import Api from './services/countries.js'
import Filter from './components/Filter.jsx'
import Countries from './components/Countries.jsx'

function App() {

    const [countries, setCountries] = useState([])
    const [searchCountryName, setSearchCountryName] = useState('')
    const [display,setDisplay] = useState('none')
    
 // load persons data from the server
  useEffect(()=>{

    console.log("effect")
    Api
      .getAll()
      .then(country =>{
      
        setCountries(country)
      })

      
    },[])

  const handleSearchCountryNameChange = (event) =>{
    setSearchCountryName(event.target.value)
    setDisplay('none')
  }

  // handle search filter
  
  const countryNamesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchCountryName.toLowerCase()))
  


  return (
    <div>
      <Filter searchCountryName={searchCountryName} handleSearchCountryNameChange={handleSearchCountryNameChange}/>
      <Countries setDisplay={setDisplay} display={display} countryNamesToShow={countryNamesToShow}/>

    </div>
  )
}

export default App
