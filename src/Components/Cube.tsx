import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'
import { string } from 'three/tsl';

type propertyes = {
    size : [x: number, y: number, z: number],
    color : string,
    position : [x: number, y: number, z: number]
}

const Cube=({size,color,position}: propertyes) =>{
    const ref = useRef<any>(0);
    const [ishover,setishover] = useState(true);
    const [isclicked ,setisclicked] = useState(true);


    
    useFrame( (state,delta)=>{
        ref.current.rotation.x += delta;
        const speed = ishover ? 0.2 : 1
        ref.current.rotation.y += delta*speed
    });

  return (
    <mesh 
      position={position} 
      ref={ref}
      onPointerEnter={(event)=>(event.stopPropagation(),setishover(false))}
      onPointerLeave={()=> setishover(true)}
      onClick={()=> setisclicked(!isclicked)}
      scale={isclicked ? 1.5 : size}
      >
        <boxGeometry args={size}/>
        <meshStandardMaterial color={ishover ? "white":color}/>
    </mesh>
  )
}
export default Cube

