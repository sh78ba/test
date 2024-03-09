import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Signin from '../sigininsignup/Signin'
//import MainPage from './pages/MainPage'


function Body() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signin /> }></Route>
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default Body