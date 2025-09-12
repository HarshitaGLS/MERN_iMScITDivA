import { Component } from "react";

class Demo1 extends Component{
    constructor(props){
        super(props)
        this.state = { address:"Law Garden" , mobile:9090909090 }
    }
    handleClick = ()=>{
        alert(this.state.address)
    }
    render(){
        return(
            <>
            <h2>Class Demo</h2>
            <h3>{this.props.title}</h3>
            <button type="button" onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default Demo1