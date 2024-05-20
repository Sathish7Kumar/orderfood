import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './CRUD/HomePage'
import Users from './CRUD/Users';
import './App.css'

const App4 = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/users' element={<Users/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App4