import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 15
  let addValue = () => {
    console.log("value added", counter)
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }
  }
  let removeValue = () => {
    console.log("value added", counter)
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value:{counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
