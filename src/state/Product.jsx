import React, { Component } from 'react'

class Product extends Component {
  
    state={
      Product:{
        Product_Name:"SAMSUNG Galaxy F23 5G (Forest Green, 128 GB)",
        Product_Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70",
        Product_Price:14999,
        Product_Qty:1
      }
    }
    decrHandler=()=>{
        this.setState({
          Product:{
            ...this.Product,Product_Qty:this.state.Product.Product_Qty - 1
          }
        } )
    }
    incrHandler=()=>{
        this.setState({
          Product:{
            ...this.Product,...this.state.Product.Product_Qty + 1
          }
        })
    }
  render() {
    return (
      
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-10">
      <table className='table table-hover'>
      <thead className='bg-info'>
      <th>Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Total Price</th>
      </thead>
      <tbody >
      <tr>
      
      <td>{this.state.Product.Product_Name}</td>

      <td><img src={this.state.Product.Product_Image} alt="" height="50px" /></td>

      <td>{this.state.Product.Product_Price}</td>

      <td>
      <i className="fa fa-minus-circle" onClick={this.decrHandler}></i>
      {this.state.Product.Product_Qty}
      <i className="fa fa-plus-circle" onClick={this.incrHandler}></i>
      </td>

      <td>{this.state.Product.Product_Qty * this.state.Product.Product_Price}</td>

      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      
    )
  }
}

export default Product