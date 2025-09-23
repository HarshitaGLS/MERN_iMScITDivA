import { Outlet } from "react-router"
import Navbar from "./pages/Navbar"

function App() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <Outlet/>
        </div>
        
      </>
  )
}

export default App
