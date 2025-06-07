import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import StarCanvas from './StarBackGround'
//import { Parallax } from 'react-parallax'




export default function Page1() {
  return (
       <div className='relative h-screen w-screen border-t-4 border-white overflow-hidden '>
       
               
                   <Parallax translateY={[-40, 40]} className='bg-neutral-950 h-full w-full absolute flex justify-center  z-10  border-purple-500 inset-0 '>
                  <div className='w-[300px] h-[200vh] mt-[-50vh]  opacity-10 absolute  bg-white  blur-3xl shadow-2xl ' ></div>
                   </Parallax>
                
                 
                   <Parallax translateY={[-40, 40]} className=' absolute z-20 h-full w-full inset-0 '>
                    <div className='flex justify-center items-center gap-0 h-screen w-screen   border-white'>
                      <div className='flex justify-between items-start w-full border-0 border-yellow-500'>

                      <div className='flex flex-col justify-center items-center border-0 rounded-2xl border-cyan-500 h-auto w-[700px] ml-[50px]'>

       
                     <div className='flex justify-center items-center  text-6xl font-extrabold h-90 w-full text-emerald-200 bg-neutral-900  rounded-2xl'>
                       Pritesh
                     </div>
                      <div className='text-left text-2xl  mb-10 mt-10 border-0 border-white   text-white '>
                      <div className='mb-2'> Hi, I’m  <span className='text-cyan-500'>Pritesh </span></div>
                     <span>A passionate software developer with a strong interest in building modern, responsive web applications. 
                I love solving real-world problems with code. Always eager to grow, collaborate, and contribute to exciting tech projects. </span>
                  </div>
                     </div>
                    
                    <div className='border-0  border-cyan-500 mr-[50px]  w-[700px] h-auto flex flex-wrap items-center justify-center   rounded-2xl  '>
                     
                  <div className='flex justify-center items-center border-0  border-cyan-500 gap-5'>
                    <div className='h-auto w-auto  border-white rounded-4xl'>
                        <div className='flex flex-col gap-3 p-5  rounded-2xl bg-neutral-900  w-auto h-auto mb-5 border-0  border-purple-500   '>
                          <div className='   border-white text-cyan-500 text-2xl   '>Programing</div>
                          <div className=' border-green-500 text-xl ml-4  text-white'> java | javaScript | C/C++ | TypeScript | MySql | Html | CSS</div>
                        </div>
                        <div className='flex flex-col gap-3  p-5  rounded-2xl bg-neutral-900   w-auto h-auto mb-5 border-0 border-yellow-500   text-2xl text-white'>
                          <div className=' text-2xl text-cyan-500 border-0 border-white '>Library/Frameworks</div>
                          <div className='text-xl text-white ml-5'> React.Js | Spring | Spring Boot | Tailwind | Spring Security | Spring Jpa</div>
                        </div>
                        <div className='flex flex-col gap-3  p-5  rounded-2xl bg-neutral-900  w-auto h-auto mb-5 border-0 border-green-500   text-2xl text-white'>
                          <div className=' text-2xl text-cyan-500 border-0 border-white '>Platforms/Ide</div>
                          <div className='text-xl text-white ml-5'> GFG | LeetCode | GitHub | Visual Studio Code | Eclipse</div>
                        </div>
                        <div className='flex flex-col gap-3  rounded-2xl bg-neutral-900 p-5 w-auto h-auto  border-0 border-blue-500   text-2xl text-white'>
                          <div className=' text-2xl text-cyan-500 border-0 border-white '>Soft-Skills</div>
                          <div className='text-xl text-white ml-5'> Problem Solving | LeaderShip | TeamWork | Creativity | Curiosity | Time Management</div>
                        </div>
                    </div>
                  </div>
                    </div>

                     </div> 
                     </div>
       
                     
                   </Parallax>
                 
            </div>
  )
}

