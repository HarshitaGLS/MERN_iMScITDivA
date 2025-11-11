import React from 'react'
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
const Navbar = () => {
  const countval = useSelector(state=>state.counter.count)

  return (
   <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GLS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <NavLink to='/' className="nav-link">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/about' className="nav-link">About</NavLink>
        </li>
         <li class="nav-item">
         <NavLink to='/products' className="nav-link">Products</NavLink>
        </li>
         <li class="nav-item">
          <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
        </li>
         <li class="nav-item">
          <a className="nav-link" >count : {countval} </a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}   
      </ul>
    <form>
      <div className="input-group">
        <input class="form-control" type="search" placeholder="Search"/>
        <button class="btn btn-danger" type="button"><FaSearch/></button>
      </div>
       </form>
        <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <NavLink className="nav-link" to='/login'><FaUserCircle />Login</NavLink> */}
          <NavLink style = {(isActive)=>({
		color: isActive ? "red" :"white",
		backgroundColor: isActive? "yellow" :"black"
})} to='/login'><FaUserCircle />Login</NavLink>

        </li>
         <li class="nav-item">
          <NavLink className="nav-link" to='/signup'>SignUp</NavLink>
        </li>   
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar
