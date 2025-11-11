// import React from 'react'

// const PropChildrenDemo = (props) => {
//   return (
//    <>
//    <hr/>
//     <h1>Children Props Demo</h1>
//     {props.name}<br/>
//     {props.mobile}
//     {props.children[0]}
//    </>
//   )
// }

// export default PropChildrenDemo


import React from 'react'

const PropChildrenDemo = ({name,mobile=null,location,children}) => {
  return (
   <>
    <h1>Children Props Demo</h1>
    {name}<br/>
    {mobile}
    {children}
   </>
  )
}

export default PropChildrenDemo
