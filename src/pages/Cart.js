import React from "react";

const Cart = ({ cart ,clearCart , calcTotal, removeCart }) => {
  return (
    <>
      <h1>CartPage</h1>
      { cart.length > 0 
      ?
       <>
       <h1>You have ordered</h1>
       <button onClick={clearCart}>Clear Cart</button>
       {cart.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <img src={item.image} height={150} width={150} />
            <h3>Price -- Rs:{item.price}.00</h3>
            <button onClick={()=>removeCart(index)}>Remove from Cart</button>
          </div>
        );
      })}
      <h1>Total Price : Rs {calcTotal()} </h1>
       </>
       :
       <>
       <h1>Your Cart is Empty</h1>
       </>
        }
    </>
  );
};

export default Cart;
