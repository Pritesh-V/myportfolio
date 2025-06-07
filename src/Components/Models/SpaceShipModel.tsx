import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import Spaceship from "../RawModel/Spaceship";


export default function SpaceShipModel() {
    

  return (
    <Canvas  camera={{position : [5,0,0]} } className="z-2 " >
      <group>
        <directionalLight intensity={1} position={[10, 10, 10]} color={'white'} />
        <directionalLight position={[-10, 5, 10]} color={'white'}/>
        <directionalLight position={[0, 10, -10]} color={'white'}/>
        <directionalLight position={[0, 20, 0]} color={'white'}/>


        <Suspense>
            <Spaceship/>
        </Suspense>
      <OrbitControls enableZoom={false} /> 
       </group>
    </Canvas>
  )
}
