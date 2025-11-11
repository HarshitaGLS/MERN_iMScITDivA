import React, { useState } from 'react'

const FormHandling = () => {
    let [myname , setMyName] = useState("")
    let handleCheck = ()=>{}
  return (
    <>  
        {/* <input type="text" value={myname} onChange={(e)=>console.log(e.target.value)}/> */}

        <input type="text" value={myname} onChange={(e)=>setMyName(e.target.value)}placeholder='enter name '/> 
        {/* nyname = e.target.value */}

        <button type="button" className="btn btn-primary" onClick={handleCheck}>
            check 
        </button>
        <h2>{myname}</h2>
    </>
  )
}

export default FormHandling
