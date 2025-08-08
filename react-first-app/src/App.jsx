import './App.css'

import Counter from "./aug05/Counter"
import Calculate from "./aug08/Calculate"

function App() {
  return (
  <>
   {/* <div>Hello React</div>
   <Counter></Counter> */}

   <h1 style = {{color:"blue"}}>New Component</h1>

   <h1 class="gls">New Component</h1>
   <Calculate fname="ram"/>
   </>
  )
}

export default App
