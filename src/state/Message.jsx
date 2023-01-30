import React, { Component } from "react";

class Message extends Component{
    //message="Hello"
    state = {
        msg:"hello"
    }
    gmHandler=()=>{
        this.setState({msg:"good morning"})
    }
    gaHandler=()=>{
        this.setState({msg:"good afternoon"})
    }
    render(){
        return(
            <div>
            <h1>Message:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            </div>
        )
    }
}
export default Message