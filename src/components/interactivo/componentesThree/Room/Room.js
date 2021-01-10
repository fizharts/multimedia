import { colores } from './../../../../helpers/colores';


// import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { useSelector } from 'react-redux';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Room(props) {
  const group = useRef()
  const planet = useRef();
  // useFrame(() => (planet.current.rotation.y += 0.09));
  // const { nodes } = useLoader(GLTFLoader, './modelos/scene.gltf')

  console.log(props.markers2)

  const colorH = ( col ) => {
    let colorPlaneta 
    switch (col) {
      case 'Crítica':
        colorPlaneta = colores.rojo
        break;
      case 'Media' :
        colorPlaneta = colores.amarillo
        break;
      case 'Buena' : 
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
          <mesh visible userData={{ test: "hello" }} ref={planet} position={[0, 0, 0]} autoRotate={true} autoRotateSpeed={0.2} >
            <sphereGeometry attach="geometry" args={[5, 7, 16]} />
            <meshStandardMaterial attach="material" color={colores.amarillo} />
          </mesh>

          {
            props.markers2.map(marker=>(
              <mesh visible userData={{ test: "hello" }} ref={planet} position={marker.position} autoRotate={true} autoRotateSpeed={0.2} >
                <sphereGeometry attach="geometry" args={[5, 7, 16]} />
                <meshStandardMaterial attach="material" color={colorH( marker.estatus_capacidad_hospitalaria )} />
                </mesh>
            ))
          }

        {/*
            <mesh userData={{ test: "hello" }} ref={planet} position={[6, 6, 6]} rotation={[0, 0, 0]} autoRotate={true} autoRotateSpeed={0.2} >
            <sphereGeometry attach="geometry" args={[1, 20, 10]} />
            <meshPhongMaterial attach="material" color={colores.rojo} />
          </mesh>

          <mesh visible ref={planet} position={[7,7,7]}  >
            <sphereGeometry attach="geometry" args={[ 1, 32, 32 ]} />
            <meshPhongMaterial attach="material" color={colores.verde} />
          </mesh>
        */}

        </group>

      </group>

    </group>
  )
}
