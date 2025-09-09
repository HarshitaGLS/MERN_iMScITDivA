let products = [ 
{name:"product1",price:1000,image:"image1",category:"Cat1",stock:100,desc:""},
{name:"product2",price:2000,image:"image2",category:"Cat2",stock:10,desc:""},
{name:"product3",price:4000,image:"image3",category:"Cat1",stock:0,desc:""},
{name:"product4",price:3000,image:"image4",category:"Cat2",stock:20,desc:""},
]
// console.log(products[0])
// console.log(products[0].name)

products.map((product,id)=>{
    console.log(product.price) 
})
