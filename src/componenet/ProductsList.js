import React, { useEffect, useState } from 'react';
import Product from './Products';

function ProductsList()
{
  const api_url = "https://fakestoreapi.com/products";
  const api_url_cat = "https://fakestoreapi.com/products/categories"
  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
    .then((res)=> res.json())
    .then((data)=>setProducts(data));
  }
  const getGategories = () => {
    fetch(api_url_cat)
    .then((res)=> res.json())
    .then((data)=>setCategories(data));
  }
  const getProductsInCategories = (catName) => {
    fetch('${api_url_cat}/${catName}')
    .then((res)=> res.json())
    .then((data)=>setProducts(data));
  }
  useEffect(() => {
    getProducts();
    getGategories();
  },[]);

    return(
        <>
        <h1 className="text-center p-3">Our Products</h1>
        <div className="container">
        <button onClick={()=>{
              getProducts();
            }} className='btn btn-info'>
              All
            </button>
          {
            categories.map((cat)=> {
              return ( <button key={cat} onClick={()=>{
                getProductsInCategories(cat);
              }} className='btn btn-info'>
                {cat}
              </button>
              );
            })
          }
          <div className="row">
            {products.map((product) => {
              return(
                <div className="col-3" key={product.id}>
                   <Product product={product} showButton={true}/>
                </div>
              );
            })}
          </div>
        </div>
        </>
    );
}
export default ProductsList;