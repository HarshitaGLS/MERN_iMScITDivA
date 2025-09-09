import React from 'react'
import ProductCard from './ProductCard.jsx'
import { productlist } from '../assets/products.jsx'

const DisplayinTable = () => {
  return (
  <>
    <div class="table-responsive">
        <table class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th><th>Price</th><th>Category</th>
                    <th>Stock</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {productlist.map((product,index)=> <tr key={index}>
                    <td scope="row">{product.id}</td>
                    <td>{product.name}</td>
                    <td><img src={product.image} style={{height:'50px',width:'50px'}}/></td>
                    <td>&#8377;{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>
                        <button type="button" class="btn btn-success me-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                         <button type="button" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </button>  
                    </td>
                </tr>
                )}
               
            </tbody>
        </table>
    </div>
    
  </>
  )
}

export default DisplayinTable
