import Languages from "./Languages.jsx"
import Api from "../services/countries.js"
import { useState,useEffect } from 'react'
import WeatherDetails from "./WeatherDetails.jsx"
const CountryDetails = ({display,country}) =>{
    const api_key = import.meta.env.VITE_SOME_KEY

    
    

   const [weather,setWeather] = useState([])
    const [lat, lon] = country.capitalInfo.latlng
    const WeatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
    
    useEffect(()=>{
        console.log("effect")
        Api.getWeatherAll(WeatherUrl).then(weather =>{
            setWeather(weather)
        })
    },[])

    if(weather.length == 0) {return <div></div>}
    
    console.log(weather)
    

    return(
    <div style={{display: display}}>
        <h2>{country.name.common}</h2>
        <p className="country">Capital {country.capital} <br/>area {country.area}</p>
        <h2>Languages:</h2>
        <Languages country={country}/>
        
        <img className="countryFlag" src={country.flags.png} alt="hello"></img>
        
        <WeatherDetails country={country} weather={weather}/>
    </div>) 
}

export default CountryDetails
