import React from 'react'

const Counter1 = () => {
      let [count, setCount] = React.useState(1)
  return (
    <>
     <>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        {/* <button onClick={()=>count>1 ? setCount(count-1) : setCount(1)}>Decrease</button> */}
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(-count)}>Change Sign</button>
        <button onClick={()=>setCount(0)}>Reset</button>

         <h1>{count}</h1>      
        </>
    </>
  )
}

export default Counter1
