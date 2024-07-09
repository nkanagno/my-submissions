const Country = (props) =>{

return (
    <li className="country" >{props.name} <button onClick={props.showDetails}>show</button></li>
)
}
export default Country
