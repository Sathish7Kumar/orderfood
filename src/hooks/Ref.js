// 1
import React, { useRef, useState } from 'react'

const Ref = () => {

    const [count, setcount] = useState(0)

    const ref = useRef(0)

    // const ref ={
    //     current : 0
    // }

    // console.log(ref.current);

    const handleRefCount = () =>{
        ref.current++
    }

    console.log("re-render");


  return (
    <>
     <h1>Count : {count} </h1>
    <button onClick={()=>setcount(count+1)}>Add</button>
    <h1>Ref - Count : {ref.current} </h1>
    <button onClick={handleRefCount}>Add</button>
    </>
  )
}

export default Ref

//2

// import React, { useEffect, useRef } from 'react'

// const Ref = () => {
//     const inpRef = useRef()
//     useEffect(()=>{
//         inpRef.current.focus()
//     },[])
//   return (
//     <div>
//         <input ref={inpRef} type='text'/>
//     </div>
//   )
// }

// export default Ref

// 3

// import React, { useEffect, useRef, useState } from 'react'

// const Ref = () => {
//     const [inputValue, setinputValue] = useState("")
//     const prevValue = useRef("")
//     useEffect(()=>{
//         prevValue.current = inputValue
//     },[inputValue])
//   return (
//     <div>
//         <input type='text' onChange={(e)=>setinputValue(e.target.value)}/>
//         <h1>Current Input : {inputValue}</h1>
//         <h1>Previous State : {prevValue.current}</h1>
//     </div>
//   )
// }

// export default Ref