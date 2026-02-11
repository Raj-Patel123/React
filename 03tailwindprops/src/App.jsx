import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let aa = {
    name:"raj",
    age:23
  }

  let bb = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card channel="chai aur code" someObj={aa} otherObj={bb}/>
    <Card username="raj patel" btnText="visit me"/>
    </>
  )
}

export default App
