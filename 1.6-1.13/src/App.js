import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({text, value})=>(
  <p>{text} {value}</p>
)
const Statistics = ({good, neutral, bad}) =>{
  if((good+bad+neutral)===0){
    return(
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>)
  }
  return (
    <div>
      <h1>statistics</h1>
      <Statistic text={"good"}value={good}/>
      <Statistic text={"neutral"}value={neutral}/>
      <Statistic text={"bad"}value={bad}/>
      <Statistic text={"average"}value={(good+bad*-1)/(good+neutral+bad)}/>
      <Statistic text={"positive"}value={(good/(good+bad+neutral)*100)+"%"}/>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick}text={"good"}/>
      <Button handleClick={handleNeutralClick}text={"neutral"}/>
      <Button handleClick={handleBadClick}text={"bad"}/>
      <Statistics good={good}neutral={neutral}bad={bad}/>
    </div>
  )
}

export default App
