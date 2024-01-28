import React from 'react'
import { Icon } from '@iconify/react'
import Button from './Button'
function Navsecbutton() {
  return (
    <div className='flex items-end space-x-4 mr-6 text-black ' >
    {/* Left side content */}
    <div className='flex'>
      <Button label="Import" icon={<Icon icon="humbleicons:upload" />} className="text-slate-700 rounded-lg mr-3 bg-white border-2" />
      <Button label="Add" icon={<Icon icon="material-symbols:add" />} className="text-white rounded-lg  bg-purple-700 " />
    </div>
    </div>
  )
}

export default Navsecbutton