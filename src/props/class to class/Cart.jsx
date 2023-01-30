import React, { Component } from 'react'
class Cart extends Component{
    render(){
        return(
            <div>
            <h3>Cart Component</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Product Name:{this.props.name}</h4>
            <h4>Product Price:{this.props.price}</h4>
            <h4>Product Color:{this.props.color[1]}</h4>
            </div>
        )
    }
}
export default Cart