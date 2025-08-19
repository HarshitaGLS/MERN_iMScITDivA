import React from 'react'

const ListRendering = () => {
    let students = ["Ram","Shyam","Sam","Olive","Peter","Walter"]
  return (
   <>
    {/* {students.map((item,index)=><h1 key={index}>{item}</h1>)} */}

    {/* {students.map((item,index)=>{return <h1 key={index}>{item}</h1>})} */}

    {students.map((item,index)=>{return (
    <h1 key={index}>{item}</h1>  
    )   
})
}
    
   </>
  )
}

export default ListRendering
