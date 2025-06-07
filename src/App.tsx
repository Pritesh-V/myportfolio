import './App.css'
import Home from './Components/Home'
import StarCanvas from './Components/StarBackGround'
import InfinityModel from './Components/Models/InfinityModel'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page1 from './Components/Page1'
import Navbar from './Components/Navbar'
import Marquee from 'react-fast-marquee'
import Contact from './Components/Contact'


function App() { 
  
    
  return (
    <div className='relative z-0 no-scrollbar overflow-x-hidden'>
      <div className='fixed z-0 w-full h-full  bg-neutral-950 '></div>
       <StarCanvas/>
       <Navbar/>
       <Home/>
       <Page1/>
       <div className=' relative z-20  flex justify-center items-center text-9xl h-[300px] w-screen border-t-4 border-b-4 border-white      font-bold '>
        <div className='flex flex-col justify-evenly items-center  w-full   h-[250px] '>


                  <Marquee autoFill pauseOnHover  speed={20} >
                     <div className='flex gap-5 flex-row flex-wrap'>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-cyan-500'>Java</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-cyan-500'>Java Script</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-cyan-500'>Tailwind</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-cyan-500'>Type Script</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 mr-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-cyan-500'>C/C++</div>
                    </div>

                

                  </Marquee>
                 

                 
                    <Marquee autoFill direction='right' pauseOnHover speed={20}>
                     <div className='flex gap-5 flex-row flex-wrap'>

                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-white'>Spring Boot</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-white'>Spring</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-white'>React</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-white'>MySQL</div>
                    <div className='bg-neutral-900 border-0 border-cyan-500 mt-5 mr-5 pl-12 pr-12 pt-3 pb-3 text-2xl font-semibold  rounded-2xl text-white'>Python</div>
                  </div> 
                    </Marquee>
                  </div>
       </div>
      <Page2/>
       <div className=' relative z-10 flex justify-center items-center text-9xl h-[300px] w-screen bg-neutral-950 border-t-4 border-b-4 border-white    text-white font-bold '>
        <InfinityModel/>
       </div>
       <Page3/>
       <Contact/>
   </div>
    
      
  )
}

export default App
