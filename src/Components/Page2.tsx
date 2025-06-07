import React from 'react'
import Marquee from 'react-fast-marquee'
import { Parallax } from 'react-scroll-parallax'


export default function Page2() {
  return (
     <div className='relative h-screen w-screen overflow-hidden '>

            {/* first parralax */}
            <Parallax translateY={[-40, 40]} className='bg-neutral-950 h-full w-full absolute flex justify-center z-10 inset-0 '>
                  <div className='w-[300px] h-[200vh] mt-[-50vh]  opacity-10 absolute  bg-white  blur-3xl shadow-2xl ' ></div>
              
            </Parallax>
         
            {/* second parralax */}
          
            <Parallax translateY={[-40, 40]} className=' absolute z-20 h-full w-full inset-0 '>
              <div className='flex h-full flex-col justify-center items-center'>
                <div className=' flex  flex-col justify-evenly  w-full h-full border-0 border-amber-500'>
                  {/* First division */}
                  <div>
                   {/* first Section */}
                   <div className=''>
                    <div className='flex  flex-col w-[700px] ml-[50px] h-auto text-white border-0 border-green-500 '>
                      <div className='text-6xl font-bold mb-5 text-cyan-500'>Education</div>
                      <div className='flex flex-col flex-wrap '>
                      <div className='text-xl mb-5'>
                        <div className='text-xl font-semibold' >Birla Vishvakarma Mahavidyalaya  [ Jun 2020 - Jun 2024]</div>
                        <div className='text-xl' >Computer Engineer</div>
                      </div>
                      <div className='text-xl mb-5'>
                        <div className='text-xl font-semibold' >Citizen's School  [ March 2020 ]</div>
                        <div className='text-xl' >12th GSEB</div>
                      </div>
                      <div className='text-xl'>
                        <div className='text-xl font-semibold' >shantiniketan Vidhya Vihar School [ March 2018]</div>
                        <div className='text-xl' >10th GSEB</div>
                      </div>
                      </div>
                    </div>
                    

                   </div>
                   {/*second Section */}
                   <div>
                    
                   </div>

                  </div>

                  {/* Second division */}
                  <div>
                    <div className='flex flex-col flex-wrap w-[700px] ml-[50px] h-auto border-0 border-yellow-500'>
                      <div className='text-6xl text-cyan-500 font-bold mb-5'>Internships</div>
                      <div className='text-xl text-white'>
                        <div className='text-xl font-semibold'>Dottech  [January 2024 - Jun 2024]</div>
                        <div className=' mb-5'>Spring Boot ( java ) Intern</div>
                        <div>During the internship at Dottech, I had the opportunity to work on projects involving Spring Framework and Spring
Security. These are pivotal technologies in the realm of Java-based enterprise applications, widely adopted for their
robustness, ease of use, and comprehensive ecosystem.</div>
                      </div>
                    </div>

                  </div>
                </div>
               </div>

              
            </Parallax>
          
     </div>
  )
}