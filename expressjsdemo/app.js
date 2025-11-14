import express from 'express'
import 'dotenv/config'

const server = express()
//http://localhost:5000
server.get("/" ,(req,res)=>{
    res.send("Hello from expressjs")
})
server.get("/user" ,(req,res)=>{
    // res.send("user route")
    // res.json({"message":"This is user Route"})

    //if we have query string in url 
    // res.send(`Query String = ${JSON.stringify(req.query)}`)
    res.send(`Query String = ${req.query.name}`)

})

//dynamic parameter
server.get('/user/:uname',(req,res)=>{
     res.send(`name = ${req.params.uname}`)
})

const port = process.env.PORT  || 7000
server.listen(port, ()=>{
    console.log(`server started at http://localhost:${port}`)
})



