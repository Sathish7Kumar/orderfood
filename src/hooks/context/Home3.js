// import React from 'react'

// const Home3 = ({name}) => {
//   return (
//     <>
//     <h1>Home 3 Component</h1>
//     <h2>My name is {name} </h2>
//     </>
//   )
// }

// export default Home3

import React, { useContext } from 'react'
import { NameContext } from './HomeContext'

const Home3 = () => {
    const name = useContext(NameContext)
  return (
    <>
    <h1>Home 3 Component</h1>
    <h2>My name is  {name}</h2>
    </>
  )
}

export default Home3