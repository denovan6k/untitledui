import React from 'react'
import Navsecbutton from './Navsecbutton'
function Heax() {
  return (
    <>
    <div className='flex ml-7 justify-between mt-12 mb-8'>
        <div className='ml-7'>
        <h1 className='text-3xl font-medium'>Welcome back, Olivia</h1>
        <p className='text-base'> Track, manage and forecast your customers and orders.</p>
        </div>
     <div>
        <Navsecbutton/>
     </div>

    </div>
    </>
    
  )
}

export default Heax
