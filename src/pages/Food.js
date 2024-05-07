import React from 'react'

const Food = ({product,addCart}) => {
  return (
    <>
    <h1>Food Order Portal</h1>
    {product.map((data,index)=>{
        return(
            <div key={index}>
                <h1>{data.name}</h1>
                <img src={data.image} height={150} width={150} />
                <h3>{data.subItemsData.name}</h3>
                {data.subItemsData.subItems.map((item,index)=>{
                    return(
                        <div key={index}>
                           <h1>{item.name}</h1> 
                           <img src={item.image} height={150} width={150} />
                           <h3>{item.description}</h3>
                           <h3>Price -- Rs:{item.price}.00</h3>
                           <button onClick={()=>addCart(item)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    })}
    </>
  )
}

export default Food