import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount((p)=>p+1);
  }
  const decrement=()=>{
    setCount((p)=>p-1);
  }
  
  return (
    <div>
      <button onClick={decrement}>
        -
      </button>
      <h1>{count}</h1>
      <button onClick={increment}>
        +
      </button>
    </div>
  )
}

export default App
