import { useFrame } from 'react-three-fiber';
import { colores } from './../../../../helpers/colores';


// import * as THREE from 'three'
import React, { useRef } from 'react'


export default function Room(props) {
  const group = useRef()
  const planet = useRef();

  useFrame(() => {


    planet.current.rotation.y += 0.1
    // console.log(group)
    // group.current.children[0].children[0].children[2].rotation.y += 0.1
    group.current.children[0].children[0].children.forEach(item => {
      item.rotation.y += 0.07
    })

  });


  const colorH = (col) => {
    let colorPlaneta
    switch (col) {
      case 'Crítica':
        colorPlaneta = colores.rojo
        break;
      case 'Media':
        colorPlaneta = colores.amarillo
        break;
      case 'Buena':
        colorPlaneta = colores.verde
        break;
      default:
        colorPlaneta = colores.verde
        break;
    }


    return colorPlaneta
  }
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
            <sphereGeometry attach="geometry" args={[5, 7, 16]} />
            <meshStandardMaterial attach="material" color={colores.amarillo} />
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
                <meshPhongMaterial
                  attach="material"
                  color={colorH(
                    marker.estatus_capacidad_hospitalaria
                  )} />
              </mesh>
            ))
          }


        </group>

      </group>

    </group>
  )
}
