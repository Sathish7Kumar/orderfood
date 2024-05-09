import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setcount] = useState(0)

    const [array, setarray] = useState([25,10])
    function max(){
        console.log("maximum calling");
        return Math.max(...array)
    }

    const memValue = useMemo(()=>{
        return max()
    },[array])

    console.log("re-render");


  return (
    <>
    <h1>Count : {count} </h1>
    <button onClick={()=>setcount(count+1)}>Add</button>
    <h1>Array :{JSON.stringify(array)}</h1>
    <h1>Maximum Value in Array : {memValue}</h1>
    <button onClick={()=>setarray([...array,Math.round(Math.random()*100)])}>Change Array</button>
    </>
  )
}

export default Memo