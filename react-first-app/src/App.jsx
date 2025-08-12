import './App.css'

import Counter from "./aug05/Counter"
import Calculate from "./aug08/Calculate"
import ParentComp from './aug12/ParentComp'

function App() {
  return (
  <>
   {/* <div>Hello React</div>
   <Counter></Counter> */}

   {/* <h1 style = {{color:"blue"}}>New Component</h1>

   <h1 className="gls" id="hh">New Component</h1>
   <Calculate fname="ram"/> */}

  <ParentComp myname="GLS" since={1927} isActive={true} />

   </>
  )
}

export default App
