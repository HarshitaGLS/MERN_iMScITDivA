import fs from 'fs'
/*
fs.readFile("notes_nov14.txt",(err,data)=>{
    if(err) throw err
    else console.log(data.toString())
})
console.log("last line") */

/*const data = fs.readFileSync("notes_nov14.txt")
console.log(data)
console.log("last line") */


/*fs.writeFile("file1.txt" , "This is my text file",(err)=>{
    if(err) console.log(err.message)
    else console.log("file written successfully");
    
}) */


fs.readFile("about.html",(err,data)=>{
    if(err) throw err
    else console.log(data.toString())
})










