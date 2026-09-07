import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(0)

  const addvalue = () => {
    counter = counter+1
    setcounter(counter)
  }
  const removevalue = () => {
    if (counter<=0) {
      return;
    }
    setcounter(counter-1)
  }

  return (
    <>
    <h1>faique</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
