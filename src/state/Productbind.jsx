import React from 'react'

class Productbind extends React.Component{
    state={
        msg:"Hello"
    }
    updateHandler =(value)=>{
        this.setState({msg:value})
    }
    render(){
        return(
            <>
            <h1>Product Bind Component: {this.state.msg}</h1>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
            <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
            <button onClick={this.updateHandler.bind(this,"Good Evening")}>GE</button>
            <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
            </>
        )
    }
}
export default Productbind