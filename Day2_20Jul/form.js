let calculate =()=>{
  let a =   Number(document.getElementById("num1").value) //'2' => 2
  let b =  parseInt( document.getElementById("num2").value) //'3'
  let add = a +b
    // document.write(add) 
    // console.log(document.getElementById("result").innerHTML)

    document.getElementById("result").innerHTML = `Result:  ${add}`
}