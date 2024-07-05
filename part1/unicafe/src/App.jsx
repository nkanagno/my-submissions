import { useState } from 'react'

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) =>{
  return(
    
      <tr>
      <td>{props.text} </td> 
      <td>{props.value}</td>
      </tr>

  )
}

const Statistics = (props)=>{
  if(props.value.all ===0){
    return(
      <div>
        <br/>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value ={props.value.good} />
      <StatisticLine text="neutral" value ={props.value.neutral} />
      <StatisticLine text="bad" value ={props.value.bad} />
      <StatisticLine text="all" value ={props.value.all} />
      <StatisticLine text="average" value ={props.value.average} />
      <StatisticLine text="positive" value ={props.value.positive + "%"} />
      </tbody>
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addGood = () =>{
    setGood(good+1)

  }

  const addNeutral = () =>{
    setNeutral(neutral+1)
  }

  const addBad = () =>{
    setBad(bad+1)
  }
  

  const all = good + neutral+ bad;
  const average = all ===0 ? 0  : (good*1 +neutral*0+bad*-1)/all;
  const positive = all === 0 ? 0 : (good/all)*100;

  const values =
  {
    good: good, neutral:neutral, bad:bad, all:all, average:average,positive:positive
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick = {addGood}/>
      <Button text="neutral" handleClick = {addNeutral}/>
      <Button text="bad" handleClick = {addBad}/>
      <Statistics value={values}/>
    </div>
  )
}

export default App