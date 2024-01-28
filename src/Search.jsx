import React from 'react'

import { Icon, InlineIcon } from '@iconify/react'
const Search = () => {
  return (

    <button className='flex pl-4 pt-2 space-x-2 text-slate-600 rounded-lg w-80 h-11 justify-start text-base border-2 bg-white'>
      <Icon icon='iconamoon:search-thin' height='20' width='20' className='pt-1'/> <span className='-pt-4'>Search</span> 
      </button>
    
      
  )
}

export default Search
{/* <button className={`flex items-center justify-center p-2 ${className}`}>
<span className=" mr-1">{icon}</span>
<span className='mr-2'>{label}</span>
</button> */}