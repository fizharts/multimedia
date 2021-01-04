import { colores } from './../../../../helpers/colores';


import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Room(props) {
  const group = useRef()
  const planet = useRef();
  useFrame(() => (planet.current.rotation.y += 0.2));
  // const { nodes } = useLoader(GLTFLoader, './modelos/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group >
        <group >
          <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} autoRotate={true} autoRotateSpeed={0.2} >
            <sphereGeometry attach="geometry" args={[7, 7, 7]} />
            <meshStandardMaterial attach="material" color={colores.amarillo} />
          </mesh>

          <mesh userData={{ test: "hello" }} position={[6, 6, 6]} rotation={[0, 0, 0]} autoRotate={true} autoRotateSpeed={0.2} >
            <sphereGeometry attach="geometry" args={[2, 16, 16]} />
            <meshPhongMaterial attach="material" color={colores.rojo} />
          </mesh>

          <mesh visible ref={planet} position={[10, 10, 10]} autoRotate={true} autoRotateSpeed={0.2}  >
            <sphereGeometry attach="geometry" args={[2, 16, 16]} />
            <meshPhongMaterial attach="material" color={colores.verde} />
          </mesh>

        </group>

      </group>

    </group>
  )
}
