import React, { Component } from 'react'

class UserList extends Component {
  selUser=(user)=>{
    this.props.selUser(user)
  }
  render() {
    return (
      <div>
      <h1>UserList Component</h1>
      <div className="container" mt-5>
      <div className="row">
      <div className="col-md-8">
      <table className='table table-hover'>
      <thead  className='bg-success text-white'>
      <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Age</td>
      <td>City</td>
      </tr>
      </thead>
      <tbody>
      {
        this.props.user.map(()=>{
          return <tr key={user.id} onMouseOver={this.selUser.bind(this,user)}>
          <td> {user.id} </td>
          <td> {user.firstName} </td>
          <td> {user.age} </td>
          <td> {user.address.city} </td>
          </tr>
        })
      }
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default UserList
