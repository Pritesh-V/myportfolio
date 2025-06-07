import React from 'react'
import StarCanvas from './StarBackGround'
import Navbar from './Navbar'
import CyborgModel from './Models/CyborgModel'
import InfinityModel from './Models/InfinityModel'
import { Parallax } from 'react-scroll-parallax'

// 303841 black
// 3A4750 grey
// 00ADB5 sky blue
// EEEEEE cream white

export default function Home() {
  return (

    <div className='relative flex justify-center   h-screen w-screen overflow-hidden '>



      <Parallax translateY={[-40, 40]} className=' relative z-20 flex justify-center items-center  border-green-500 h-full w-full inset-0'>
           <div className=' flex justify-between items-center flex-col     text-8xl text-white  border-green-700 w-full font-extrabold'>

            <div>HI, I’M <span className='text-cyan-500 border-4 border-cyan-500'>PRITESH </span>
              </div>
            {/* <div className='text-6xl font-sans  border-white'>WELCOME TO MY PORTFOLIO SITE</div> */}
            
           </div>
     </Parallax>




    
            
                <Parallax translateY={[-40, 40]} className=' flex justify-center  h-full w-full  border-white absolute z-10 inset-0  '>
                  <div className='w-[200vh] h-[300px]  opacity-10 absolute top-[340px] bg-white  blur-3xl shadow-2xl ' ></div>
                  <div className='mt-[120px] h-screen w-[500px] border-white'> 
                    <CyborgModel/>
                   </div>
                </Parallax>
             
              
            
              
         </div>
  
    
  )
}
