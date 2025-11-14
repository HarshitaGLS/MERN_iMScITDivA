import http from 'http'
import fs from 'fs'
const server = http.createServer((req,res)=>{
    //http://localhost:2000 => /
    if(req.url=='/'){
        res.write("Hello from nodejs server")
        res.end()
    }
    else if(req.url=='/about'){
        fs.readFile("about.html",(err,data)=>{
            if(err) console.log(err.message)
            else {
                res.writeHead(200 , {'content-type':'text/html'})
                res.write(data.toString())
                res.end()
                }
        })
    }
  
})

server.listen(2000 , ()=>{
    console.log("server started at http://localhosy:2000")
})