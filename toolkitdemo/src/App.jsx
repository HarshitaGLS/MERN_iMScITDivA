import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { useDispatch } from 'react-redux'
import { DECREMENT, INCREMENT } from './redux/counterSlice'

function App() {
  const dispatch = useDispatch()
  return (
  <>
  <button type="button" 
  onClick={()=>dispatch(INCREMENT())}>Increase</button>
   <button type="button" 
  onClick={()=>dispatch(DECREMENT(5))}>Decrease</button>
    <Counter/>
  </>
  )
}

export default App
