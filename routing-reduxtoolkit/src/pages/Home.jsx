import React from 'react'
import { Counter } from '../components/Counter'
import { useLocation } from 'react-router'

export const Home = () => {
  const loc = useLocation()
  console.log(loc)
  return (
    <div>Home<br/>
    {loc.state !=null ? <h1>Welcome {loc.state}</h1>:""}
      <Counter/>

    </div>
  )
}
