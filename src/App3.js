// import React from 'react'
// import Fetch from './Fetch/Fetch'

// const App3 = () => {
//   return (
//     <>
//     <Fetch/>
//     </>
//   )
// }

// export default App3

import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './ContextFetch/Home';
import Product from './ContextFetch/Product';
import Cart from './ContextFetch/Cart';
import Navbar from './ContextFetch/Navbar';
import axios from 'axios';

export const FakeStoreContext = createContext()

const App3 = () => {
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([])
    const [cartValue, setcartValue] = useState(cart.length)

    const getProducts = async  () => {
        try {
          const resp = await axios.get("https://fakestoreapi.com/products")  
          setproducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])

  return (
    <FakeStoreContext.Provider value={{products,setproducts,cart,setCart,cartValue,setcartValue}}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </FakeStoreContext.Provider>
  )
}

export default App3