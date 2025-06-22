import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { Link } from 'react-router-dom';
import { FaBorderTopLeft } from "react-icons/fa6";
const SideBar = () => {
  return (
    <div className='bg-gray-100 w-[3%] items-center gap-4 text-gray-700  justify-center py-4 md:block hidden sm:block p-2 h-screen position-fixed '>
   <Link to='/analyticsdashboard'> <MdOutlineSpaceDashboard className='text-xl text-gray-700' /></Link>  
   <Link to ='/order'><FaBorderTopLeft className='text-2xl mt-1 ' /></Link>
    </div>
  )
}

export default SideBar
