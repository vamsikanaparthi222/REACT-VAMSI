//instead of <a> anchore tags to use <Link> link tags
//it has inside a Link tage to use -> to="/home" like that

import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="#" className='Navbar-brand'>React Routing Example</Link>
      <div className='ml-auto'>
      <ul className='navbar-nav'>
      <li className='navbar-list'><Link className='navbar-link' to="/UserApp">User App</Link></li>
      <li className='navbar-list'><Link className='navbar-link' to="/home">Home</Link></li>
      <li className='navbar-list'><Link className='navbar-link' to="/about">About</Link></li>
      <li className='navbar-list'><Link className='navbar-link' to="/service">Service</Link></li>
      <li className='navbar-list'><Link className='navbar-link' to="/contact">Contact</Link></li>
      <li className='navbar-list'><Link className='navbar-link' to="/product">Product</Link></li>
      </ul>
      </div>
      </nav>
      
    )
  }
}

export default Navbar
