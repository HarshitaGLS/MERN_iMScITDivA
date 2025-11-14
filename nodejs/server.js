import http from 'http'

const server = http.createServer((req,res)=>{
    //http://localhost:2000
    res.write("Hello from nodejs server")
    res.end()
})

server.listen(2000 , ()=>{
    console.log("server started at http://localhosy:2000")
})