import React, { useRef } from 'react'
import Cube from './Cube'
import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three';
import { Controller } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { useControls } from 'leva';

function Scene() {

  
  const directionalLightref = useRef<any>(0);

  useHelper(directionalLightref,DirectionalLightHelper,0.5,"white")

  const {lightColor , lightIntencity} = useControls({
    lightColor : "white",
    lightIntencity : {
      value : 0.5,
      min : 0 ,
      max : 10,
      step : 0.1  // increment and decrement by 0.1 
    }

  });



  return (
    <><directionalLight position={[2,3,2]} intensity={lightIntencity} color={lightColor} ref={directionalLightref}/>
        <ambientLight intensity={1}/>
        <group position={[0,-1,0]}>
        <Cube size={[1,1,1]} color='green' position={[1,1.5,0]}/>
        <Cube size={[1,1,1]} color='red' position={[1,0,0]}/> 
        <Cube size={[1,1,1]} color='hotpink' position={[-1,0,0]}/>
        <Cube size={[1,1,1]} color='yellow' position={[-1,1.5,0]}/>
       </group>
       <OrbitControls  /></>
  )
}

export default Scene