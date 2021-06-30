import React, { useState } from 'react'

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const points = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [voted, setVote] = useState(points)

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleVote = () =>{
    const newVote = [...voted];
    newVote[selected] += 1;
    setVote(newVote);
  }

  

  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>     
        HAT {voted[selected]} VOTES
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>Next quote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>     
        {anecdotes[indexOfMax(voted)]}
      </div>
      <div>     
        HAT {Math.max(...voted)} VOTES
      </div>
    </div>
  )
}

export default App
