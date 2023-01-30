// using with 2 or more handlers
// using without card
import React, { Component } from 'react'

export class Login1 extends Component {
    state={
        emailId:"",
        Password:""
    }
    emailHandler(event){
        this.setState({emailId:event.target.value})
    }
    passwordHandler(event){
        this.setState({emailId:event.target.value})
    }
    submitHandler(event){
        event.prevent.default()
    }

  render() {
    return (
        <div>
        <h1>Login Component</h1>
        <form onSubmit={this.submitHandler}>
      <input type="text" placeholder='Email Id' onChange={this.emailHandler} /><br></br><br></br>
      <input type="password" placeholder='Password' onChange={this.passwordHandler} /><br></br><br></br>
      <input type="submit" placeholder='Login' />
      </form>
        </div>

      
      
    )
  }
}

export default Login1