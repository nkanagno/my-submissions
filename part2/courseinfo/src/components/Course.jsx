import Content from "./Content.jsx"
import Header from "./Header.jsx"
import Total from "./Total.jsx"


const Course = (props) => {
    return(
    <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
    </div>
    )
}
export default Course