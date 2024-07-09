
import Country from "./Country.jsx";
import CountryDetails from "./CountryDetails.jsx"
import { useState } from "react";
const Countries = ({setDisplay,display,countryNamesToShow}) => {

    
    const [selectedCountry,setSelectedCountry] = useState(null)
      if (countryNamesToShow.length >= 10) {
    return <li className="message">Too many matches, specify another filter</li>;
  }
  if (countryNamesToShow.length == 0) {
    return <li className="message">no matches, specify another filter</li>;
  }


  if(countryNamesToShow.length == 1) {
  return <CountryDetails display='block' country={countryNamesToShow[0]}/>
  }

  const showDetails = (countryName) =>{
    
    console.log(countryName.name.common)
    setSelectedCountry(countryName)
    setDisplay('block')

    
  }
  return (
    <div>
      {countryNamesToShow.map(countryName => (
        <Country
          
          showDetails={() => showDetails(countryName)}
          key = {countryName.name.common}
          name={countryName.name.common}
          country={countryName}
        />
      ))}
      {selectedCountry && (
        <CountryDetails display={display} country={selectedCountry}/>
      )}
    </div>
  );
};

export default Countries;