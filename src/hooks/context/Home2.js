// import React from 'react'
// import Home3 from './Home3'

// const Home2 = ({name}) => {
//   return (
//     <>
//     <h1>Home 2 Component</h1>
//     <Home3 name={name}/>
//     </>
//   )
// }

// export default Home2

import React, { useContext } from 'react'
import Home3 from './Home3'
import { NameContext } from './HomeContext'

const Home2 = () => {
    const name = useContext(NameContext)
  return (
    <>
    <h1> {name} Component</h1>
    <Home3 />
    </>
  )
}

export default Home2