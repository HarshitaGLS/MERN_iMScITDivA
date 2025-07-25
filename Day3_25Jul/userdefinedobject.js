let student =  {fname:"Ram",lname:"Sharma",course:"MERN",age:30}
console.log(student)
// console.log(student.lname) //student["lname"]

// for(let key in student){
    // console.log(key)
    // console.log(student[key])
// }

//js object to JSON string 
let jsonstr = JSON.stringify(student)
console.log(jsonstr)

//json string to js object 
let jsobj = JSON.parse(jsonstr)
console.log(jsobj)







