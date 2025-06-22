import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='bg-gray-100 w-[3%] items-center  justify-center py-4 md:block hidden sm:block p-2 h-screen position-fixed '>
   <Link to='/analyticsdashboard'> <MdOutlineSpaceDashboard className='text-xl text-gray-700' /></Link>  
    </div>
  )
}

export default SideBar
