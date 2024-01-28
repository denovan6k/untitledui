import React from 'react'
import Navbar from './Navbar'
import Navsec from './Navsec'
import Card from './Card'
import img1 from './assets/_Chart.png'
import img2 from './assets/_Chart (1).png'
import img3 from './assets/_Chart (2).png'
import Heax from './Heax'
import Tablet from './Tablet'
function App() {
  return (
   <>
   <div > <Navbar/>
   
<hr
  className="my-4 h-0.5 border-t-0 bg-slate-200" />
   <Navsec/>
   <hr
  className="my-4 h-0.5 border-t-0 bg-slate-200" />
 <div className=''><Heax/></div> 
  <div className='flex justify-between mx-4'>
  <Card text1='Total customers' text2='2,420' text3='40% vs last month' image={img1} icon='charm:arrow-up' iconclassname='green'/>
  <Card text1='Members' text2='1,210' text3='10% vs last month' image={img2} icon='octicon:arrow-down-16' iconclassname='red'/>
  <Card text1='Active now' text2='316' text3='20% vs last month' image={img3} icon='charm:arrow-up' iconclassname='green'/>
  </div>
    <Tablet/>
 </div></> 
  )
}

export default App