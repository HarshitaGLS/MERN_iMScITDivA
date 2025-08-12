import React from 'react'
import Childcomp from './childcomp'

const ParentComp = (props) => {
    console.log(props)
    // props.myname = "GLS University" //error
  return (
    <>
    {/* <h2>Parent Comp</h2>
    
      <h1>College Name : {props.myname} </h1> */}

    {/* ternary  */}
    {/* {props.isActive ? "User is active" : "user is not active"}    */}

    {/* {props.isActive ? <>
        <h2>{props.myname} is active</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus soluta dolore, beatae eligendi quo at adipisci excepturi suscipit eum asperiores totam laboriosam explicabo assumenda, dicta autem officia? Culpa, temporibus.</p>
        </>
    : "user is not active"}    */}

    {/* short circuit operator */}
    {/* {props.isActive && "user is active"} */}
<hr/>
  <Childcomp 
  count={1} 
  arr={["Ram","Shyam","Riya","Priya"]}></Childcomp>
    </>
  )
}

export default ParentComp











 