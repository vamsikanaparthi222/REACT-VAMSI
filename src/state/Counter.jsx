import React from "react";
class Counter extends React.Component{
    state={qty:3}

    decrHandler=()=>{
        this.setState({qty:this.state.qty -1})
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty +1})
    }
    render(){
        return(
            <React.Fragment>
            <div className="container mt-5" >
            <div className="row">
            <div className="col-md-6">
            <div className="card">
            <div className="card-header">
            <h4>Qty:{this.state.qty}</h4>
            </div>
            <div className="card-body">
            <button className="btn btn-success mr-5" onClick={this.decrHandler}>Decr</button>
            <button className="btn btn-warning" onClick={this.incrHandler}>Incr</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Counter