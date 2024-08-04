import React, { useState } from 'react'

const Password = () => {
    let [show, setShow] = useState(false)
  return (
    <div className='mt-10 w-full text-center'>
        <input type={show? "text":"password"} placeholder='Enter Your Password' className='px-5 py-3 outline-none border-none border border-red-400 rounded-md bg-gray-400 text-white placeholder:text-white' />
        <button className='bg-green-500 w-20 rounded-md px-5 py-3 font-semibold ml-3 capitalize text-white' onClick={()=>setShow(!show)}>{show? "hide" :"show"}</button>
    </div>
  )
}

export default Password