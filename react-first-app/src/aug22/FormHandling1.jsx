import React, { useState } from 'react'

const FormHandling1 = () => {
    let [myname,setMyName] = useState("")
    let [email,setEmail] = useState("")
    let [result,setResult] = useState("")
    let handleCheck = ()=>{
        if(myname=="" || email=="")
            setResult("Please fill all the fields")
        else
        setResult(`name = ${myname} and email = ${email}`)
    }
  return (
    <>  
      <input type="text" value={myname} onChange={(e)=>setMyName(e.target.value)}placeholder='enter name '/> 
       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email '/>    
          <button type="button" className="btn btn-primary" onClick={handleCheck}>check </button>
          <h3>{result !="" ? <> Data : {result}</> :null}</h3>
    </>
  )
}

export default FormHandling1
