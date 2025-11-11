//Array Object 
//String , Math, Boolean , Date, Number

let arr = [2,4,5,7,1]
let arr1 = new Array(6,9,3,8,10)
console.log(`array - ${arr}`) //2,4,5,7,1
console.log(`array= ${arr.join('-')}`) //2-4-5-7-1]
console.log(`array= ${arr.join('')}`) //24571

//  console.log(arr.length) //5 (0 index to 4)
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for(let a of arr){ //es6
//     console.log(a)
// }
// arr1.push(2,61) //6,9,3,8,10,2,61
// arr1.unshift(100,200) //100,200,6,9,3,8,10,2,61
// arr1.pop()//61
// arr1.shift()//100 [200,6,9,3,8,10,2]
// arr1.splice(2,1) //9
// arr1.splice(2,2) //9,3
// arr1.splice(2,0,1,2,13) //[200,6,1,2,13,9,3,8,10,2]

// arr.forEach((val,index)=>{
//     console.log(`Value: ${val} at index: ${index}`)
// })

//[2,4,5,7,1] = //[4,8,10,14,2]
let newarr= arr.map((item)=>"Hello"+item*2)
console.log(newarr) //[4,8,10,14,2]

let filterArr = arr.filter((item)=>item>3) 
console.log(filterArr) //[4,5,7]

console.log(arr.find((val)=>val==4)) // return 4 otherwise undefined
console.log(arr.findIndex((val)=>val==4)) // return index otherwise -1

// [2,4,5,7,1] //L to R
//prev=0 curr=2 =2
//prev=2 , curr=4 =6
//prev=6 , curr=5 =11
//prev=11 , curr=7 =18
//prev=18 , curr=1 =19
let total = arr.reduce((prev,curr)=>curr+prev)
console.log(total) //19

// reduceRight => R to L







