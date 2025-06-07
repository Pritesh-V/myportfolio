import React from 'react'

export default function 
() {
  return (
    <div className=' flex flex-row justify-between w-full  h-[70px]    backdrop-blur-md fixed z-50  top-0  shadow-[#d6d4d4]/50 bg-[#03001417]  px-10    '>
      <div className=' flex justify-center items-center w-[400px] h-[70px] text-2xl font-mono text-white  border-white '>
        Logo
      </div>
      <div className='flex  justify-evenly items-center   text-2xl font-mono  border-white h-[70px] w-[700px] '>
     <div className='text-white hover:text-cyan-500'>Home</div>
     <div className='text-white hover:text-cyan-500'>Contact</div>
     <div className='text-white hover:text-cyan-500'>About</div>
     <div className='text-white hover:text-cyan-500'>Home</div>
     </div>
    </div>
  )
}
