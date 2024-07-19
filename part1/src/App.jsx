import { useState } from 'react'
import Button from './components/Button'
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => {
    setGood(good + 1)
  }
  const neutralReview = () => {
    setNeutral(neutral + 1)
  }
  const badReview = () => {
    setBad(bad + 1)
  }

  return (
    <div>
    <h1>Give a feedback</h1>
      <Button onClick={goodReview} text="Good"/>
      <Button onClick={neutralReview} text="Neutral"/>
      <Button onClick={badReview} text="Bad"/>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      
    </div>
  )
}

export default App