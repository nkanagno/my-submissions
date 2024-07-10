import { useState } from 'react'

const Button = (props) =>{
  
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const votes = [...points]

  const NextAnecdote = () =>{
    setSelected(getRandomInt(anecdotes.length))
  }

  
  const vote = () =>{
    votes[selected] += 1
    setPoints(votes)
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function MaxVotes() {
    let maxIndex = 0;
    let maxVotes = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > maxVotes) {
        maxVotes = points[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  const maxIndex = MaxVotes();
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button handleClick={NextAnecdote} text="next anecdote"/>
      <Button handleClick={vote} text="vote"/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]} 
      <br/>
      has {votes[maxIndex]} votes
    </div>
  )
}

export default App