
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export  const Arbol = (props) => {
  const groupf = useRef()
  const { nodes, materials } = useLoader(GLTFLoader,'../modelos/scene.gltf')
  console.log(nodes)
  return (
    <group ref={groupf} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]} />
        <mesh material={materials.tree_wood} geometry={nodes.Cylinder_0.geometry} />
        <group position={[0.03, 1.99, 20.57]} scale={[2.44, 2.44, 2.44]}>
          <mesh material={materials['leaf_green.003']} geometry={nodes.Icosphere_0.geometry} />
        </group>
        <group position={[-12.06, 11.58, 18.51]} scale={[2.44, 2.44, 2.44]}>
          <mesh material={materials['leaf_green.004']} geometry={nodes.Icosphere001_0.geometry} />
        </group>
        <group position={[-12.83, -4.37, 18.68]} scale={[2.44, 2.44, 2.44]}>
          <mesh material={materials['leaf_green.001']} geometry={nodes.Icosphere002_0.geometry} />
        </group>
        <group position={[13.32, 3.81, 20.57]} scale={[2.44, 2.44, 2.44]}>
          <mesh material={materials.leaf_green} geometry={nodes.Icosphere003_0.geometry} />
        </group>
        <group position={[5.02, -8, 16.59]} scale={[2.44, 2.44, 2.44]}>
          <mesh material={materials['leaf_green.002']} geometry={nodes.Icosphere004_0.geometry} />
        </group>
        <group position={[1.94, 12.6, 17.61]} scale={[2.44, 2.44, 2.44]}>
          <mesh material={materials['leaf_green.005']} geometry={nodes.Icosphere005_0.geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../modelos/scene.gltf')


