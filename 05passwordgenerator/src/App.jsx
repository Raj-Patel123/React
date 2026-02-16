import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef =useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow){
      str+="0123456789"
    }
    if(characterAllow){
      str+="!@#$%^&*_+-=[]{}~"
    }
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
           pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllow,characterAllow,setPassword])

  useEffect(() => passwordGenerator(),[length,numberAllow,characterAllow,passwordGenerator])
// passwordGenerator()  //gives infinite re-rendering

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,6)
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef} 
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            onChange={((e) => {setLength(e.target.value)})}
            className='cursor-pointer'
             />
             <label>Lenth: {length} </label>
          </div>
            <div className='flex items-center gap-x-1'>
              <input type='checkbox'
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}/>
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type='checkbox'
              defaultChecked={characterAllow}
              id="numberInput"
              onChange={() => {
                setCharacterAllow((prev) => !prev)
              }}/>
              <label htmlFor='characterInput'>Characters</label>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
