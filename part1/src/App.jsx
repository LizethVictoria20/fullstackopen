import { useState } from "react";
import Display from './components/Display'
import Button from './components/Button'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [total, setTotal] = useState(0)

  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(updateLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(left + updateRight)
  }
  return (
    <div>
      {left}
      <Button onClick={handleRightClick} text="Right"/>
      <Button onClick={handleLeftClick} text="Left"/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App;
