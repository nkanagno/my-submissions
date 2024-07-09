const Filter = (props) =>{
return (
    <div>
        find Country: <input type="search" value={props.searchCountryName} onChange={props.handleSearchCountryNameChange}/>
    </div>
)
}
export default Filter