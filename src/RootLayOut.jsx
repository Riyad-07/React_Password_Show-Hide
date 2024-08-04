import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayOut