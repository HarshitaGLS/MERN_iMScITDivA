function Counter(){
    let count = 1
    return(
        <>
        {/* <button onClick="alert('button cliced')">Click Me</button> */}
        <h1>{count}</h1>
        <button onClick={()=>alert('button cliced')}>Click Me</button>
        </>

    )
}
export default Counter

