import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Cop from '../Cop'

import { OrbitControls, SpotLight } from '@react-three/drei';
import Cyborg from '../RawModel/Cyborg';



export default function CyborgModel() {
    

  return (
    <Canvas camera={{position : [0,-0.3,0]}} className='' >
      <group >
        <directionalLight intensity={1} position={[10, 10, 10]} color={'white'} />
        <directionalLight position={[-10, 5, 10]} color={'white'}/>
        <directionalLight position={[0, 10, -10]} color={'white'}/>
        <directionalLight position={[0, 20, 0]} color={'white'}/>
        


        <Suspense>
            <Cyborg position ={[0,-1.4,2]} />
        </Suspense>
       <OrbitControls target={[0,-0.8,2]} enableZoom={false}  /> 
       </group>
    </Canvas>

  )
}
