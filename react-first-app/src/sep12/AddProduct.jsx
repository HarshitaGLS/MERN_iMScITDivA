import React, { useState } from 'react'

const AddProduct = ({title}) => {
    const categories = ["Electronics","Cloths","Grocery","Accessories"]
    const [product,setProduct] = useState({name:"",price:0,image:"",category:""})
    const handleImage = (e)=>{
        // console.log(e.target.files[0])
        const file = e.target.files[0]
         const reader = new FileReader();
          reader.readAsDataURL(file);
         reader.addEventListener("load", ()=> setProduct({...product , image:reader.result}));
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(product)
    }
    return (
   <div className='container mt-5 col-6 bg-dark text-light'>
    <h1>{title}</h1>
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className='form-group mb-3 col-6'>
                <label className='form-label'>Name</label>
                <input type="text" name="name" className='form-control' value={product.name}
                onChange={(e)=>setProduct({...product, name:e.target.value})}/>
            </div>
            <div className='form-group mb-3 col-6'>
                <label className='form-label'>Price</label>
                <input type="number" name="price" className='form-control' value={product.price}
                 onChange={(e)=>setProduct({...product, price:e.target.value})}/>
            </div>
        </div>       
         <div className='form-group mb-3'>
            <label className='form-label'>Image</label>
            <input type="file" name="image" className='form-control' onChange={handleImage}/>
            {product.image!="" && <img src={product.image} style={{height:'100px',width:100}}/>}
        </div>
         <div className='form-group mb-3'>
            <label className='form-label'>Category</label>
            <select className='form-select' value={product.category} name="category"
             onChange={(e)=>setProduct({...product, category:e.target.value})}>
                <option value="" selected disabled>select</option>
                {categories.map((item,index)=><option key={index}>{item}</option>)}
            </select>
        </div>
        <button type="submit" className='btn btn-primary mb-2'>Add</button>
    </form>
   </div>
  )
}

export default AddProduct
