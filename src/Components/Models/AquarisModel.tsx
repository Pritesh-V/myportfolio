import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import Aquaris from "../RawModel/Aquaris";

export default function AquarisModel() {
    

  return (
    <Canvas  className='z-2 ' >
      <group >
        <directionalLight intensity={1} position={[10, 10, 10]} color={'white'} />
        <directionalLight position={[-10, 5, 10]} color={'white'}/>
        <directionalLight position={[0, 10, -10]} color={'white'}/>
        <directionalLight position={[0, 20, 0]} color={'white'}/>


        <Suspense>
            <Aquaris position={[0,0,-4]} scale={[0.2,0.2,0.2]}/>
        </Suspense>
       <OrbitControls target={[0,0,0]}  enableZoom={false}  /> 
       </group>
    </Canvas>

  )
}
