import React, { Component } from 'react'
import Axios from 'axios'

export class User extends Component {
    state={
        users:[]
    }
    getData=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            this.setState({users:response.data})
        })
        .catch()
    }
  render() {
    return (
      <div>
        <button onClick={this.getData}>User Button</button>
      </div>
    )
  }
}

export default User
