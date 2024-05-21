import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './CRUD/HomePage'
import Users from './CRUD/Users';
import './App.css'
import CreateUser from './CRUD/CreateUser';
import UserDetails from './CRUD/UserDetails';
import EditUser from './CRUD/EditUser';

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
        <Route path='/users/:id' element={<UserDetails/>} />
        <Route path='/create-user' element={<CreateUser/>} />
        <Route path='/edit-user/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App4