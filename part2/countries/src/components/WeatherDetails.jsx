const WeatherDetails = ({country,weather}) =>{
    const iconUrl = "https://openweathermap.org/img/wn"
    const icon = weather.current.weather[0].icon
return (
        <div>
    <h2>Weather in {country.capital}</h2>

        <p>temperature {(weather.current.temp-273.15).toFixed(2)} Celcius</p>
        <img src={`${iconUrl}/${icon}@2x.png`} alt="hello"/>
        <p>wind {weather.current.wind_speed} m/s</p> </div>
        )
}

export default WeatherDetails