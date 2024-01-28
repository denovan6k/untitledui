import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import che from './assets/_Checkbox base.png'
import avg1 from './assets/Avatar (1).png'
import pro from './assets/Progress bar.png'
import ava from './assets/Avatars.png'
import avg2 from './assets/Avatar (2).png'
import avg3  from './assets/Avatar (3).png'
import avg4  from './assets/Avatar (4).png'
import avg5   from './assets/Avatar (5).png'
import avg6 from './assets/Avatar (6).png'
import pro1 from './assets/Progress bar (1).png'
import pro2 from './assets/Progress bar (2).png'
import pro3 from './assets/Progress bar (3).png'
import pro4 from './assets/Progress bar (4).png'
import pro5 from './assets/Progress bar (5).png'
import ava1 from './assets/Avatars (1).png'
import ava2 from './assets/Avatars (2).png'
import ava3 from './assets/Avatars (3).png'
import ava4 from './assets/Avatars (4).png'
import ava5 from './assets/Avatars (5).png'
import che1 from './assets/Checkbox.png'
import avg7 from './assets/Avatar (7).png'
import pro6 from './assets/Progress bar (6).png'
import ava6 from './assets/Avatar group.png'
import cus from './assets/Badge.png'
import cus1 from './assets/_Badge base.png'
import Button from './Button'


function Tablet() {
  return (
   

<div className=" mx-12  mt-9 border-2 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{ width: 1270 }}>
        <thead className="text-xs text-gray-500  bg-white ">
            <tr>
                <th scope="col" className=" flex space-x-2 px-6 py-3">
                <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5  object-cover'
                       />
                       <div className='flex space-x-1'>
                       <p className=''>Company</p>
                    <Icon icon="octicon:arrow-down-16" className='grey mt-1'/>
                       </div>
                   
                </th>
                <th scope="col" className="px-6 py-3">
                    License use
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Users
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    About
                </th>
              
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2 object-cover'
                       />
                       <img
                      src={avg1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                               Catalog 
                                </li>
                                <li>
                                <span className='text-gray-500'>    catalogapp.io </span>
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-5 rounded-full  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                        <span className='text-black'>Content curating app</span>
                        </li>
                        <li>
                        Brings all your news into one place
                        </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey ' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey'height='18' width='20'/>
                   </div>
                </td>
            </tr>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2  object-cover'
                       />
                       <img
                      src={avg2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Circooles 
                                </li>
                                <li>
                                <span className='text-gray-500'>    getcirooles.com </span>
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className=' w-16 h-5 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                     <span className='text-black'>   Design software </span>
                        </li>
                        <li>
                        Super lightweight design app
                        </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div>
                </td>
            </tr>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2 object-cover'
                       />
                       <img
                      src={avg3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Command+R 
                                </li>
                                <li>
                             <span className='text-gray-500'>   cmdr.ai </span>
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-5 rounded-full  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                         <span className='text-black'>     Data prediction </span>
                        </li>
                        <li>
                      AI and machine learning data 
                        </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div>
                </td>
            </tr>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2  object-cover'
                       />
                       <img
                      src={avg4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Hourglass
                                </li>
                                <li>
                            <span className='text-gray-500'>    hourglass.app </span>
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-5 rounded-full  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                    <span className='text-black'>    Productivity app </span>
                        </li>
                        <li>
                        Time management and productivity
                        </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div>
                </td>
            </tr>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2 object-cover'
                       />
                       <img
                      src={avg5} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Layers
                                </li>
                                <li>
                            <span className='text-gray-500'>    getlayers.io </span>
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-5 rounded-full  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                   <span className='text-black'>     Web app integrations </span>
                        </li>
                        <li>
                        Connect web apps seamlessly
                        </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div>
                </td>
            </tr>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2  object-cover'
                       />
                       <img
                      src={avg6} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Quotient
                                </li>
                                <li>
                            <span className='text-gray-500'>    quotient.co </span>
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro5} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-5 rounded-full  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava5} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                     <span className='text-black'>   Sales CRM </span>
                        </li>
                        <li>
                        Web-based sales doc management                  
                           </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div>
                </td>
            </tr>

            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 mt-2 object-cover'
                       />
                       <img
                      src={avg7} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Sisyphus
                                </li>
                                <li>
                            <span className='text-gray-500'> sisyphus.com</span>    
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro6} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={cus} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-5 rounded-full  object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                <img
                      src={ava6} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-32 h-6'
                       />
                </td>
                <td className="px-6 py-4">
                    <ul>
                        <li>
                       <span className='text-black'> Automation and workflow </span>
                        </li>
                        <li>
                        Time tracking, invoicing and expenses
                        </li>
                    </ul>
                </td>
                <td className="px-6 py-4">
                   <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div>
                </td>
            </tr>
            <tr className="odd:bg-gray-100  even:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                    <Button label="Previous" icon={<Icon icon="" />} className="text-slate-800 rounded-lg text-sm border-2 bg-white" />
                    <Button label="Next" icon={<Icon icon="" />} className="text-slate-800 rounded-lg text-sm border-2 bg-white" />
                    </div>
                </th>
                <td className="px-6 py-4">
               
                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
              
                </td>
                <td className="px-6 py-4">
                   
                </td>
                <td className="px-6 py-4">
                <span className='-ml-6 text-slate-800'>Page 1 of 10 </span>
                </td>
            </tr>
            {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className='flex'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 rounded-full object-cover'
                       />
                       <img
                      src={avg2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Circooles
                                </li>
                                <li>
                                getcirooles.com
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
        </tbody>
    </table>
</div>

  )
}

export default Tablet;