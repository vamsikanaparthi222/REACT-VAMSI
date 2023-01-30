import React, { Component } from 'react'
import Cart from './Cart'

class Product extends Component{
    Product_Name="Samsung F23"          //class component data
    Product_Price=15000
    Color=["white","black","gray","red","gold"]
    render(){
        return(
            <div>
            <h2>Product Component</h2>
           
             <hr/>
            <Cart name={this.Product_Name}          //sending as react props
            price ={this.Product_Price}
        color={this.Color}/>
            </div>
        )
    }
}
export default Product