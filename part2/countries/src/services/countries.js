import axios from "axios";


const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () =>{
    const request = axios.get(`${baseUrl}`)
    return request.then(response => { return response.data})
}

const getWeatherAll = (WeatherUrl) =>{
    const request = axios.get(`${WeatherUrl}`)
    return request.then(response => { return response.data})
}
export default {getAll,getWeatherAll}