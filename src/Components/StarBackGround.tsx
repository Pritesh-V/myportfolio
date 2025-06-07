import React, { useRef, useState, Suspense, JSX} from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Point, PointMaterial, Points, PositionPoint } from '@react-three/drei' // Import PositionPoint here
import { inSphere } from 'maath/random'
import { Group } from 'three/examples/jsm/libs/tween.module.js'

export const StarBackGround = ((props : JSX.IntrinsicElements['group'])=> {
  // Use PositionPoint here for the ref type, not THREE.Points
  const ref : any = useRef(null);
    //  const ref = useRef<PositionPoint>(null!)
    // const [ref, setRef] = useState<THREE.Points | null>(null)


  const [sphere] = useState(() => {
    const positions = new Float32Array(5000)
    inSphere(positions, { radius: 1.2 })
    return positions
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta/20
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group  rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#00FFFF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1}
  
        />
      
      </Points>

      
    </group>
  )
});

const StarCanvas = () => {
  return (
    <div className="w-full h-full fixed  inset-0 z-20  pointer-events-none ">
      <Canvas camera={{ position: [0,0,0.8] }} className='h-full w-full' style={{ pointerEvents: 'none' }} >
        <Suspense fallback={null}>
          <StarBackGround/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarCanvas
