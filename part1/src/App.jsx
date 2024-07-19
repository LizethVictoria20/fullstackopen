import { useState } from 'react'
import Button from './components/Button'
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  // const [average, setAverage] = useState(0)

  const goodReview = () => {
    const goodReview = good + 1
    setGood(goodReview)
    const totalReviews = total + 1 
    setTotal(totalReviews)
  }

  const neutralReview = () => {
    const neutralReview = neutral + 1
    setNeutral(neutralReview)
    const totalReviews = total + 1 
    setTotal(totalReviews)
  }

  const badReview = () => {
    const badReview = bad + 1
    setBad(badReview)
    const totalReviews = total + 1 
    setTotal(totalReviews)
  }

  const average = good + neutral + bad / total
  const positive = (100 * good) / total

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
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

export default App