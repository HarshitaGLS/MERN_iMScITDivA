//rafc
//rfc
//rfce

import React, { useState } from 'react'

const Calculate = () => {
    let [num1,setNum1] = useState(5)
    let [num2,setNum2] = useState(2)
    let [result,setResult] = useState("")
    let operation =(op)=>{
        // if(op=='+') setResult(num1+num2)
        // console.log(eval(num1 + op + num2)) //'5+2'
        setResult(eval(num1 + op + num2))}
  return (
    <>
      {/* <button type="button" onClick={()=>setResult(num1+num2)}>+</button> */}
     <button type="button" onClick={()=>operation('+')}>+</button>
     <button type="button" onClick={()=>operation('-')}>-</button>
     <button type="button" onClick={()=>operation('*')}>*</button>
     <button type="button" onClick={()=>operation('/')}>/</button>
     <button type="button" onClick={()=>operation('%')}>%</button>
      <h1>Output: {result}</h1>
    </>
  )
}

export default Calculate
