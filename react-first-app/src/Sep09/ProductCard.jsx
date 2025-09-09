import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='col-3 mb-3'>
      <div class="card">
        <img src={product.image} class="card-img-top" style={{height:'200px'}} />
        <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">
                &#8377;{product.price}</p>
            <button class="btn btn-primary">Add to Cart </button>
        </div>
        </div>
    </div>
  )
}

export default ProductCard
