import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar= () =>{
  return (
  <div className='text-2xl h-screen cursor-pointer  bg-[#4f46e5] text-white'> 
    <li className='text-3xl flex px-2 items-center  mb-3'>
     
    <RiAdminFill className='mx-2'/>Admin
   
    </li>
    
    <li className='my-3 px-2 rounded-md hover:bg-blue-200 '>
    <Link to="/mainpage/user" className='flex items-center'><FaCircleUser className='mx-2'/> Users</Link>
    
    </li>
    <li className='my-3 flex px-2 items-center rounded-md hover:bg-blue-200'>
   
    <Link className='flex items-center' to="/officials"> <FaUserGroup className='mx-2' /> Officials</Link>
    
    </li>
    <li className='my-3 flex px-2 items-center rounded-md hover:bg-blue-200'>
    <Link className='flex items-center' to="/donations"> <BiSolidDonateHeart className='mx-2' /> Donations</Link>
    
    </li>
    <li className='my-3 flex px-2  items-center rounded-md hover:bg-blue-200'>
    <CgCommunity  className='mx-2'/> Community
    </li>    
  </div>
  );
}
export default Navbar;