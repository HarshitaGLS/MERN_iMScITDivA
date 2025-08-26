import React, { useState } from 'react'

const StateDemo = ({address=""}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(true)
  return (
    <>
    <button type="button" className='btn btn-primary me-2' onClick={()=>setIsLoggedIn(!isLoggedIn)}>Change State</button>
    <button type="button" className='btn btn-danger' onClick={()=>isLoggedIn ? setIsLoggedIn(false) :setIsLoggedIn(true)}>Change State1</button>

    <h1 style={{color:"blue",backgroundColor:"GrayText"}}>{address}</h1>   
    {isLoggedIn ? <h2>Welcome Back!!</h2>:"Please Login!!!"}   
    </>
  )
}

export default StateDemo

// A  !A 
// T   F
// F   T
// isLoggedIn = !isLoggedIn
// isLoggedIn ? setIsLoggedIn(false) :setIsLoggedIn(true)















