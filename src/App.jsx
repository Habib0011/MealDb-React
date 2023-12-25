import { useState } from 'react'
import './App.css'
import Meal from './components/Meal/Meal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Meal></Meal>
    </>
  )
}

export default App
