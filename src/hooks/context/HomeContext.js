import React, { createContext, useState } from 'react'
import Home1 from './Home1'

// context -> create -> export -> Provider (set value in value attribute )

export const NameContext = createContext()

const HomeContext = () => {
    const [name, setname] = useState("Manoj")
  return (
    <NameContext.Provider value={name}>
    <h1>Home Context</h1>
    <Home1/>
    </NameContext.Provider>
  )
}

export default HomeContext