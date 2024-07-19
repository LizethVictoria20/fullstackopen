import { useState } from "react";
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1);
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Increase by one" />
      <Button onClick={decreaseByOne} text="Decrease by one" />
      <Button onClick={setToZero} text="Set to zero" />
    </div>
  );
};

export default App;
