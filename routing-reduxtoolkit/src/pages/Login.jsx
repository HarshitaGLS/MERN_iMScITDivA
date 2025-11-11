import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const Login = () => {
  const [user,setUser] = useState({email:"",pwd:""}) 
  const [result,setResult] = useState("")
  const redirect = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(user.email=="" || user.pwd=="")
        alert("Please fill all the fields")
    else 
        // alert(JSON.stringify(user))
      // setResult(user)
        // redirect("/") //redirect("/about")
         redirect("/", {state:user.email})
  }
  return (
    <div>
      {result !="" ? <> {JSON.stringify(result)} </> :""}
      <form onSubmit={handleSubmit}>
      <label>Email</label><input type="text" value={user.email}
      onChange={(e)=>setUser({...user, email:e.target.value})}/><br/>
      <label>Password</label><input type="password" value={user.pwd}
      onChange={(e)=>setUser({...user, pwd:e.target.value})}/><br/>
      <button type="submit">Login</button>
</form>
    </div>
  )
}
