import React from 'react'
import Nav from './Nav/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactHome from './Home/ReactHome';
import App3 from './App3';
import FormValidation from './form/FormValidation';
import Login from './form/Login';
import TodoHome from './todo/TodoHome';



const App6 = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<ReactHome/>} />
      <Route path='/todo' element={<TodoHome/>} />
      <Route path='/signup' element={<FormValidation/>} />
      <Route path='/signin' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App6