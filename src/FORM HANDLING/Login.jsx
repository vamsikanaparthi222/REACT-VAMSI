//using only one input handler and using card and bootstrap
//using name attribute

import React, { Component } from 'react'

class Login extends Component {
    state={
        emailid:"",
        password:""
    }
    inputHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <h1>Main Login Form</h1>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-4">
        <div className="card">
        <div className="car-header"></div>
        <div className="card-body">
        <form onSubmit={this.submitHandler}>
        <div className='form-group'>
        <input name='emailid' onChange={this.inputHandler} type="text" placeholder='Email Id' className='form-control' />
        </div>
        <div className='form-group'>
        <input name="password" onChange={this.inputHandler} type="password" placeholder='Password'  className='form-control'/>
        </div>
        <div>
        <input  className='btn btn-info' type="submit" placeholder='Login' />
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Login
