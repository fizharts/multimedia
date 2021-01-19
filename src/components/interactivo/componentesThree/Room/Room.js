import { colorH } from './../../../../helpers/fun';
import { useFrame } from 'react-three-fiber';
import { colores } from './../../../../helpers/colores';


import * as THREE from 'three'
import React, { useRef } from 'react'

const quaternion = new THREE.Quaternion();
export default function Room(props) {
  const group = useRef()
  const planet = useRef();
  useFrame(() => {

    // planet.current.rotation.setEulerFromQuaternion(q)
    // console.log(group)
    // group.current.children[0].children[0].children[2].rotation.y += 0.1
    group.current.children[0].children[0].children.forEach(item => {
      item.rotation.x += 0.07
      // item.position.x += 0.9
      console.log(item.quaternion)
    })

  });


  
  return (

    <group ref={group} {...props} dispose={null}>
      <group >
        <group >

          <mesh
            visible
            userData={{
              test:
                "hello"
            }}
            ref={planet}
            position={[0, 0, 0]}
            autoRotate={true}
            autoRotateSpeed={0.2}>
            <sphereGeometry
              attach="geometry"
              args={[5,7,16]} />
            <meshPhongMaterial
              attach="material"
              metalness={1}
              shininess={1}
              color={colores.amarillo} />
          </mesh>




          {
            props.markers2.map(marker => (
              <mesh
                visible
                userData={{
                  test:
                    "hello"
                }}
                key={marker.position}
                position={marker.position}
                autoRotate={true}
                autoRotateSpeed={0.8}>
                <sphereGeometry
                  attach="geometry"
                  args={[5, 7, 16]} />
                <meshLambertMaterial
                  attach="material"
                  color={colorH(marker.estatus_capacidad_hospitalaria)} />
              </mesh>
            ))
          }


        </group>

      </group>

    </group>
  )
}
