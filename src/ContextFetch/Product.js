import React, { useContext, useState } from "react";
import { FakeStoreContext } from "../App3";

const Product = () => {



  const context = useContext(FakeStoreContext);
  
  // const context =  {products,setproducts,cart,setCart,cartValue,setcartValue}

  const [input, setinput] = useState("")

  const filteredProducts = context.products.filter((item) =>{
    return item.title.toLowerCase().includes(input.toLowerCase())
  })

  return (
    <>
      <h2>All Products </h2>
      <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder="search products..." />
      <div>
        {filteredProducts.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <img src={item.image} height={150} width={150} />
              <h4>{item.description}</h4>
              <h3>Price : {item.price}</h3>
              <h3>Rating : {item.rating.rate}</h3>
              <h4>Available Count : {item.rating.count}</h4>
              <button onClick={ ()=> {
                context.cart.push(item);
                context.setcartValue(context.cart.length)
              }}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
