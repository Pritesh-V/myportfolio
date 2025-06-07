import React from 'react'

import SpaceShipModel from './Models/SpaceShipModel'
import { Parallax } from 'react-scroll-parallax'

export default function Page3() {
  return (
   <div className='relative h-screen w-screen overflow-hidden '>
   
           
               <Parallax translateY={[-40, 40]} className='bg-neutral-950 h-full w-full absolute flex justify-center z-10 inset-0 '>
                  <div className='w-[300px] h-[200vh] mt-[-50vh]  opacity-10 absolute  bg-white  blur-3xl shadow-2xl ' ></div>
               </Parallax>
            
             
               <Parallax translateY={[-40, 40]} className=' absolute z-20 h-full w-full inset-0 '>
                 <div className='flex justify-end items-center h-screen w-screen border-2 border-rose-500'>
                  <div className='  border-amber-400'>
                    <div className='text-6xl ml-[50px] text-cyan-500 mb-10 font-bold'>Projects</div>
                    <div className='flex flex-wrap h-auto gap-y-[80px] items-center  border-green-500 justify-between'>
                      {/* Project 1 */}
                      <div className=' flex w-[700px] ml-[50px] h-auto  bg-neutral-900 rounded-4xl text-white'>
                        <div className='flex justify-center items-center h-[300px] min-w-[300px] bg-neutral-800 rounded-l-4xl'>Image Project 1</div>
                        <div className='flex flex-col flex-wrap  border-0 rounded-r-4xl border-yellow-500 ml-5 mr-5'>
                        <div className='text-2xl mt-5 mb-5 text-cyan-500 font-semibold '>Inventory-Management-System</div>
                        <div className='text-xl   text-left text-white  line-clamp-5'>Developed a full-stack web application for Inventory Management System, Utilized Spring Boot for the
backend, MySQL, JPA for the Database and React Js, TypeScript & Tailwind CSS for the frontend development.<br/>
In the Inventory Management System we can see the Product Quantity, Product Details, Product Live Location
and Live Quantity Which can help us to Track the Products in Real time</div>
                        <div className='mt-5 text-xl text-blue-500 '>Project Link</div>
                        </div>
                        </div>
                      {/* Project 2 */}
                      <div className=' flex w-[700px] mr-[50px] h-auto  bg-neutral-900 rounded-4xl text-white'>
                        <div className='flex justify-center items-center h-[300px] min-w-[300px] bg-neutral-800 rounded-l-4xl'>Image Project 1</div>
                        <div className='flex flex-col flex-wrap  border-0 rounded-r-4xl border-yellow-500 ml-5 mr-5'>
                        <div className='text-2xl mt-5 mb-5 text-cyan-500 font-semibold '>Inventory-Management-System</div>
                        <div className='text-xl   text-left text-white  line-clamp-5'>Developed a full-stack web application for Inventory Management System, Utilized Spring Boot for the
backend, MySQL, JPA for the Database and React Js, TypeScript & Tailwind CSS for the frontend development.<br/>
In the Inventory Management System we can see the Product Quantity, Product Details, Product Live Location
and Live Quantity Which can help us to Track the Products in Real time</div>
                        <div className='mt-5 text-xl text-blue-500 '>Project Link</div>
                        </div>
                        </div>
                      {/* Project 3 */}
                      <div className=' flex w-[700px] ml-[50px] h-auto  bg-neutral-900 rounded-4xl text-white'>
                        <div className='flex justify-center items-center h-[300px] min-w-[300px] bg-neutral-800 rounded-l-4xl'>Image Project 1</div>
                        <div className='flex flex-col flex-wrap  border-0 rounded-r-4xl border-yellow-500 ml-5 mr-5'>
                        <div className='text-2xl mt-5 mb-5 text-cyan-500 font-semibold '>Inventory-Management-System</div>
                        <div className='text-xl   text-left text-white  line-clamp-5'>Developed a full-stack web application for Inventory Management System, Utilized Spring Boot for the
backend, MySQL, JPA for the Database and React Js, TypeScript & Tailwind CSS for the frontend development.<br/>
In the Inventory Management System we can see the Product Quantity, Product Details, Product Live Location
and Live Quantity Which can help us to Track the Products in Real time</div>
                        <div className='mt-5 text-xl text-blue-500 '>Project Link</div>
                        </div>
                        </div>
                      {/* Project 4*/}
                      <div className=' flex w-[700px] mr-[50px] h-auto  bg-neutral-900 rounded-4xl text-white'>
                        <div className='flex justify-center items-center h-[300px] min-w-[300px] bg-neutral-800 rounded-l-4xl'>Image Project 1</div>
                        <div className='flex flex-col flex-wrap  border-0 rounded-r-4xl border-yellow-500 ml-5 mr-5'>
                        <div className='text-2xl mt-5 mb-5 text-cyan-500 font-semibold '>Inventory-Management-System</div>
                        <div className='text-xl   text-left text-white  line-clamp-5'>Developed a full-stack web application for Inventory Management System, Utilized Spring Boot for the
backend, MySQL, JPA for the Database and React Js, TypeScript & Tailwind CSS for the frontend development.<br/>
In the Inventory Management System we can see the Product Quantity, Product Details, Product Live Location
and Live Quantity Which can help us to Track the Products in Real time</div>
                        <div className='mt-5 text-xl text-blue-500 '>Project Link</div>
                        </div>
                        </div>



                    </div>
                  </div>
                   
                 </div>
   
                 
               </Parallax>
             
        </div>
  )
}