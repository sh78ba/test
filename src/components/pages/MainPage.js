import React from 'react'
import Navbar from '../pages/Navbar'
import User from './User/User'
import { Route, Routes} from 'react-router-dom'
import Officials from '../pages/Officials/Officials'


const MainPage = () => {
  return (
    <div className='flex'>
        <div className='w-2/12'>
        <Navbar />
        </div>
        
        <div className='w-10/12'>
        <Routes>
        <Route path="/mainpage/user" element={<User />} />
        <Route path="/mainpage/officials" element={<Officials />} />
       
      </Routes>
        </div>
       
    </div>
  )
}

export default MainPage;