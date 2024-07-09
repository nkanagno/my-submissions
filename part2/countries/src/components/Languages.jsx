
import Language from "./Language.jsx";

const Languages = ({country}) =>{
    return(
        <div>
        {Object.entries(country.languages).map(([code,language])=>(
            <Language key={code} language={language}/>
        ))}
        </div>
    )
}

export default Languages;