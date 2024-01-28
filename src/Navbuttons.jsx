import React from 'react'
import Button from './Button'
import { Icon, InlineIcon } from '@iconify/react'
import img5 from './assets/Avatar.png'
function Navbuttons() {
    return (
        // <div className='flex'>
        //       <Button label="Upgrade now" icon="🚀" className="rounded-lg text-white bg-slate-300"/>
        // </div>
        <div className='flex justify-between items-center  text-black ' >
{/* Left side content */}
<div>
  <Button label="Upgrade Now" icon={<Icon icon="material-symbols:bolt-outline-rounded" />} className="text-slate-600 rounded-lg text-sm border-2 bg-white mr-10" />
</div>

{/* Middle content */}
<div className='flex items-center space-x-4 '>
  <Icon icon="mdi-light:settings" className="text-xl" /> {/* Replace "icon1" with the actual Iconify identifier for your first icon */}
  
  <InlineIcon icon="carbon:notification" className="text-xl" /> {/* Replace "icon2" with the actual Iconify identifier for your second icon */}
   <img
    src={img5} // Replace with the actual path to the profile picture
    alt='Profile'
    className='w-8 h-8 rounded-full object-cover'
  />
</div>



</div>
        
    )
}

export default Navbuttons 
