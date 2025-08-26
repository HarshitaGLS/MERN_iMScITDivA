import './App.css'

import Counter from "./aug05/Counter"
import Calculate from "./aug08/Calculate"
import ParentComp from './aug12/ParentComp'
import ListRendering from './aug19/ListRendering'
import PropChildrenDemo from './aug19/PropChildrenDemo'
import Image1 from './assets/a.webp'
import FormHandling from './aug22/FormHandling'
import FormHandling1 from './aug22/FormHandling1'
import Counter1 from './aug22/Counter1'
import StateDemo from './aug26/StateDemo'

function App() {
  return (
  <div className='container mt-5' >
   {/* <div>Hello React</div>
   <Counter></Counter> */}

   {/* <h1 style = {{color:"blue"}}>New Component</h1>

   <h1 className="gls" id="hh">New Component</h1>
   <Calculate fname="ram"/> */}
 {/* <div className='text-primary'>Hello React</div> */}
  {/* <ParentComp myname="GLS" since={1927} isActive={true} /> */}
{/* <button type="button" className="btn btn-primary"> 
  Button</button>*/}

  {/* <PropChildrenDemo name="GLS" location="Law Garden" mobile={9087654321}>
    <p>para</p>
  </PropChildrenDemo>

<PropChildrenDemo name="LJ" location="SG Highway">
  <h1>children</h1>
  <ParentComp myname="GLS" since={1927} isActive={true} />
</PropChildrenDemo> */}
    {/* <img src={Image1} style={{width:"100px",borderRadius:"10px"}} />
    <ListRendering/> */}

    {/* <FormHandling/> */}
    {/* <FormHandling1/> */}

    {/* <Counter1/> */}
    <StateDemo address="Law Garden"/>
   </div>
  )
}

export default App
