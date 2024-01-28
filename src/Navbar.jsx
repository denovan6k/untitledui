import React from 'react'
import Navbuttons from './Navbuttons'
import img4 from './assets/Logomark.png'

function Navbar() {
  return (
    
        <nav>
              
                <ul className='flex text-gray-600 mt-6  ml-7'>
                
                <div className='flex  ml-7'>
                <img src={img4} alt="" className="w-8 h-8" />
              <h1 className='ml-2'><span className='text-black  font-bold'>Untitled UI</span></h1>
            </div>
            
                    <li className='ml-6'>
                       Home 
                    </li>
                    <li className='ml-4'>
                       Dashboard
                    </li>
                    <li className='ml-4'>
                       Projects
                    </li>
                    <li className='ml-4'>
                        Tasks
                    </li>
                    <li className='ml-4'>
                       Reporting
                    </li >
                    <li className='ml-4'>
                       Users
                    </li>
                   <li className='ml-auto flex justify-items-end mr-6'>
                     <Navbuttons/>
                    </li>
                  
                    
                </ul>
          
        </nav>
    
  )
}

export default Navbar