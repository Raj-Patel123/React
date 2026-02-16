import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const bgColor = () => {
    setColor("yellow")
  }
  return (


    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    ><h1>hello</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}} onClick={bgColor}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>purple</button>

      </div>
      </div>
    </div>
  )
}

export default App
