import React from 'react'

const Childcomp = ({count,arr}) => {
    //let {count,arr} = props
  return (
    <>
      <h2 className='bg-danger'>child comp</h2>
      <h1>{count}</h1>
      <br/>
      {/* {arr.join(" ")} */}
      
      {/* {arr.map((item)=>{return <h5>{item}</h5>})} */}
      {arr.map((item)=><h5>{item}</h5>)}

    </>
  )
}

export default Childcomp




