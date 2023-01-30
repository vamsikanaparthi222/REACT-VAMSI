//using card without state and handlers
//without any bootstrap also

import React, { Component } from 'react'

class Login2 extends Component {
  render() {
    return (
      <div>
      <h1>Card using Login Form</h1>
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-5">
      <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
      <form >
      <div>
      <input type="text" placeholder='Email Id' />
      </div>
      <br></br>
      <div>
      <input type="password" placeholder='Password' />
      </div>
      <br></br>
      <div>
      <input type="submit" placeholder='Login' />
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

export default Login2