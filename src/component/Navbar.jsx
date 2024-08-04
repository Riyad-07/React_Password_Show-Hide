import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full px-4 py-2 text-center bg-gray-400'>
        <Link className='text-2xl font-bold text-orange-600' to="/">Logo</Link>
        <ul className='flex text-2xl font-bold text-orange-600 gap-x-16'>
            <Link to="/value1">Change Value</Link>
            <Link to ="/value2">Password</Link>
        </ul>
    </div>
  )
}

export default Navbar