import React, { useContext } from 'react'
import { FakeStoreContext } from '../App3'

const Cart = () => {
    const context = useContext(FakeStoreContext)
    // const context =  {products,setproducts,cart,setCart,cartValue,setcartValue}
  return (
    <>
    {
    context.cart.length > 0 
    ?
    <>
    <div>
        <button>Clear Cart</button>
        <h1>You have Ordered : </h1>
        {context.cart.map((item,index)=>{
            return (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <img src={item.image} height={150} width={150} />
                    <h3>Price : {item.price}</h3>
                    <button>Remove from Cart</button>
                </div>
            )
        })}
        <h2>Total Price : </h2>
    </div>
    </>
    :
    <>
    <h1>Your cart is Empty</h1>
    </>
    }
    </>
  )
}

export default Cart