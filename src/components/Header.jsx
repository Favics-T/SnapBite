import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/'>
      <div className='bg-gray-100 px-4 py-2 flex items-center gap-2'>
      <FaWhatsapp className='text-green-600 text-2xl' />
      <h1 className='text-md'>Whatsapp</h1>
    </div>
      </Link>

    </div>


    
    
  )
}

export default Header
