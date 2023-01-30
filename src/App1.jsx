import React, { Component } from 'react'
import Navbar from './state/Navbar'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './state/FORM HANDLING/Components/home'
import About from './state/FORM HANDLING/Components/about'
import Service from './state/FORM HANDLING/Components/service'
import Contact from './state/FORM HANDLING/Components/contact'
import Product from './state/FORM HANDLING/Components/product'
import UserApp from './state/UserApp/UserApp'
class App1 extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
        
        <Route  path="/home" Component={Home} />
        <Route  path="/about" Component={About} />
        <Route  path="/service" Component={Service} />
        <Route  path="/contact" Component={Contact} />
        <Route  path="/product" Component={Product} />
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App1
