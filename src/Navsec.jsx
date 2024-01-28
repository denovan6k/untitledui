import React from 'react'
import Button from './Button'
import Search from './Search'
function Navsec() {
  return (
    <>
      <nav>
           
           <ul className='flex text-gray-600 mt-2  ml-7'>
               <div className=''>   <li className='ml-7 '>
                 <Button label="Overview" className="rounded-lg bg-slate-100 self-center" />
               </li> 
               </div>
            
               <li className='ml-4 py-2 '>
                  Notification
               </li>
               <li className='ml-4 py-2'>
                  Saved reports
               </li>
               <li className='ml-4 py-2'>
                   Trade history
               </li>
               <li className='ml-4 py-2'>
                  Reporting
               </li >
             <li className='ml-4 py-2'> User reports</li>  
              <li className='ml-auto flex justify-items-end mr-6'>
                <Search/>
               </li>
                
               
               
           </ul>
     
   </nav></>
  )
}

export default Navsec