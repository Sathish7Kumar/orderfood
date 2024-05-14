import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {
    const [product, setproduct] = useState([])
    

    // 1. 
    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then(resp => resp.json())
    //     .then(data => setproduct(data))
    // },[])

    //2.
    // async function getResponse(){
    //     try {
    //         const resp = await fetch("https://fakestoreapi.com/products")
    //         const data = resp.json()
    //         return data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // getResponse()

    // async function getProducts(){
    //     try {
    //         const products = await getResponse()
    //         setproduct(products);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     getProducts()
    // },[])

    // axios : 
    const getProducts = async  () => {
        try {
          const resp = await axios.get("https://fakestoreapi.com/products")  
          setproduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])



  return (
   <>
   <h2>Fetch Data using AXIOS</h2>
   {product.map((e,index)=>{
    return (
        <div key={index}>
        <h1>{e.title}</h1>
        <img src={e.image} height={150} width={150} />
        <h4>{e.description}</h4>
        <h3>Price : {e.price}</h3>
        <h3>Rating : {e.rating.rate}</h3>
        <h4>Available Count : {e.rating.count}</h4>
        <button>Add to Cart</button>
        </div>
    )
   })}
   </>
  )
}

export default Fetch