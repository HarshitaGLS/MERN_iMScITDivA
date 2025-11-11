import React, { useState } from "react"

function Counter(){
   /* let count = 1
    let increaseCount = ()=>{
        count+=1
        console.log(count)
    } */

     let [count, setCount] = React.useState(1)
    //  let [] = useState()
      let increaseCount = ()=>{
        setCount(count+1) //count = count+1
        console.log(count)
    } 
    return(
        <>
        <button onClick={increaseCount}>Counter</button>
        <button onClick={()=>setCount(count+1)}>Counter1</button>
        <button onClick={()=>setCount((prev)=>prev+1)}>Counter2</button>
         <h1>{count}</h1>

        {/* <button onClick="alert('button cliced')">Click Me</button> */}
       
        {/* <button onClick={()=>alert('button cliced')}>Click Me</button> */}

      
        </>

    )
}
export default Counter

