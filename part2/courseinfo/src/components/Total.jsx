const Total = (props) => {
  // const-definitions

  const total = props.parts.reduce((sum, part) => {

  return sum + part.exercises 
},0)
  return (
    <strong>total of {total} exercises</strong>
  )
}

export default Total;