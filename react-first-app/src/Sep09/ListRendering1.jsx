import React from 'react'
import {productlist} from '../assets/products.jsx'
import ProductCard from './ProductCard.jsx'

const ListRendering1 = () => {
    console.log(productlist)
  return (
    <>
    <div className='row'>
       {productlist.map((product,index)=>{
        return <ProductCard key={product.id} product={product}/>
       })}
    </div>
    </>
  )
}

export default ListRendering1
