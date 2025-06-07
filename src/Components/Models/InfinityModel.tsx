import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import Infinity from '../RawModel/Infinity';
 


export default function InfinityModel() {
    

  return (
    <Canvas  camera={{position : [5,0,0]} } className="" >
      <group>
        <directionalLight intensity={1} position={[10, 10, 10]} color={'white'} />
        <directionalLight position={[-10, 5, 10]} color={'white'}/>
        <directionalLight position={[0, 10, -10]} color={'white'}/>
        <directionalLight position={[0, 20, 0]} color={'white'}/>


        <Suspense>
            <Infinity scale={[0.09,0.05,0.05]}  />
        </Suspense>
      <OrbitControls enableZoom={false} /> 
       </group>
    </Canvas>
  )
}
