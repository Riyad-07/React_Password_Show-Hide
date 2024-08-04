import React, { useState } from 'react'

const Increment = () => {
    let [count, setCount] = useState(0)
  return (
    <div className='text-center '>
        <button onClick={()=>setCount((count)=> count+1)} className='px-3 py-2 font-semibold text-white bg-green-400 rounded-md'>Increment</button>
        <p className='mt-3 mb-3 text-4xl font-bold text-red-500'>{count}</p>
        <button onClick={()=>setCount((count)=> count-1)} className='px-3 py-2 font-semibold text-white bg-green-400 rounded-md'>Decrement</button>
    </div>
  )
}

export default Increment