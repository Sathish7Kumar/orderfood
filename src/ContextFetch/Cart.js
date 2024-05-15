import React, { useContext, useEffect, useState } from 'react'
import { FakeStoreContext } from '../App3'

const Cart = () => {
    const context = useContext(FakeStoreContext)
    // const context =  {products,setproducts,cart,setCart,cartValue,setcartValue}

    const [total, settotal] = useState(0)

    useEffect(()=>{
        const newPrice = context.cart.reduce((sum,product) => sum+product.price ,0)
        settotal(newPrice)
    },[context.cart])

    const handleRemove  = (item) =>{
        const removeIndex = context.cart.findIndex((e) => e===item)
        if(removeIndex !== -1){
            const updatedCart = [...context.cart] 
            // [bag(0),tee(1),ring(2),hardisk(3)]
            updatedCart.splice(removeIndex,1)
            context.setCart(updatedCart) // [ring(0),hardisk(1)]
            context.setcartValue(updatedCart.length)
        }
    }

    const handleClear = () =>{
        context.setCart([])
        context.setcartValue(0)
    }
  return (
    <>
    {
    context.cart.length > 0 
    ?
    <>
    <div>
        <button onClick={handleClear}>Clear Cart</button>
        <h1>You have Ordered : </h1>
        <h2>Total Price : $ {total.toFixed(2)} </h2>
        {context.cart.map((item,index)=>{
            return (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <img src={item.image} height={150} width={150} />
                    <h3>Price : {item.price}</h3>
                    <button onClick={()=>handleRemove(item)}>Remove from Cart</button>
                </div>
            )
        })}
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