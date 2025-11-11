// console.log("nodejs learning")

const add = (a,b)=>a+b

function printhello(){
    console.log("hello from nodejs")
}

const name= "GLS"
const fact = function(n){
    if(n == 1) return 1 
    else return n*fact(n-1)
}

export {name,fact,printhello}

