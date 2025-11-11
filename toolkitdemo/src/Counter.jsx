import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
    const countval = useSelector(state=> state.counter.count)
  return (
    <div>Counter
        <h1>{countval}</h1>
    </div>
  )
}
