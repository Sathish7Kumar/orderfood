import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <h3>Click here to go <Link to='/products'>Products Page</Link></h3>
    </>
  )
}

export default Home