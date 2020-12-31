import { Stars } from 'drei';
import React, { useMemo } from 'react'
import { Suspense, useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';

import { Canvas, extend } from 'react-three-fiber';
import { Controls } from './componentesThree/Controls/Controls';
import { Marker } from './componentesThree/Marker/Marker';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Room from './componentesThree/Room/Room';
import { Navigation } from './componentesThree/Navigation/Navigation';
import { useSpring, animated, config } from "react-spring";
import { NavLink } from './componentesThree/NavLink/NavLink';

import { useSelector } from 'react-redux';
import { NavsHospitales } from './componentesThree/NavsHospitales/NavsHospitales';
import { Random } from 'random-js';
import { CMarker } from './componentesThree/Marker/CMarker';



let selectedItemIndex

const initialCameraPos = [18, 18, 18];
const initialControlsTarget = [0, 0, 0];

extend({ OrbitControls })


export const CPlanetas = () => {
  
  const { datos } = useSelector(state => state.planetas)
  let markers2 = [
    {
            position: [0, 0, 0],
            cameraPos: [18, 18, 18],
            name: "camaraCentral" ,
            loc : []
        }
  ]
  const random = new Random()
  const [markers] = useState([
    {
        position: [0, 0, 0],
        cameraPos: [18, 18, 18],
        name: "Titulo"
    },
    {
        position: [-12, 10, 2],
        cameraPos: [3, 9, 2],
        name: "Estado 1",
    },
    {
        position: [0, 10, -7],
        cameraPos: [0, 10, 9],
        name: "Estado 2",
    },
    {
        position: [0, 6, 2],
        cameraPos: [9, 8, 14],
        name: "Estado 3",
    },
    ]);

  let id = 1
  datos.forEach(dato => {
    let uno = random.integer(-10,20)
    let dos = random.integer(-10,20)
    let tres = random.integer(-10,20)
    
    markers2 = [
      ...markers2 ,
          {
        position:[uno , dos , tres],
        cameraPos : [uno+10 , dos + 10 , tres + 10],
        name: dato.fields.nombre_hospital ,
        id : id
      }
    ]
    id ++
  })

  console.log( markers2  )

  if( markers !== undefined ){
    console.log(markers[1].position)
  }

    // markers.map((maker) => {
    //   return maker.name = 'Uno'
    // })


    const AnimatedNavigation = animated(Navigation);

    const [isAnimating, setIsAnimating] = useState(false);

    const [cameraValues, setCameraValues] = useState({
        cachedPos: initialCameraPos,
        cachedTarget: initialControlsTarget,
        pos: initialCameraPos,
        target: initialControlsTarget,
        autoRotate: true,
    });

    const cameraSpring = useSpring({
        pos: cameraValues.pos,
        target: cameraValues.target,
        from: {
            pos: cameraValues.cachedPos,
            target: cameraValues.cachedTarget
    },
        config: config.slow,
        onRest: () => setIsAnimating(false)
    })

    const  onNavigationItemClicked = (id) => {
    if (selectedItemIndex !== id && !isAnimating) {
            selectedItemIndex = id;
            setIsAnimating(true);
            setCameraValues({
            cachedPos: cameraValues.pos,
            cachedTarget: cameraValues.cachedTarget,
            pos: markers[selectedItemIndex].cameraPos,
            target: markers[selectedItemIndex].position,
            autoRotate: id === 0,
        });
        }
    }

    return (
        <div className="content">
          <div className="ui">
          
            <NavsHospitales onNavigationItemClicked={onNavigationItemClicked} markers={markers}/>
        
          </div>
          {
            markers.length === 0 ? null :
            <Canvas>
      
            <ambientLight />
            <pointLight
              position={[10, 10, 10]}
              intensity={2} />
            <AnimatedNavigation
              cameraPosition={cameraSpring.pos}
              cameraTarget={cameraSpring.target} />
        
              <Room
                position={[0, 0, 0]} />
              {isAnimating && markers !== undefined ? null :
                <CMarker markers={markers}
                        selectedItemIndex={selectedItemIndex}
                        onNavigationItemClicked={onNavigationItemClicked}
                />
              
                
                }
                <Suspense/>
            <Controls
              enabled={!isAnimating}
              autoRotate={cameraValues.autoRotate}
              target={cameraValues.target} />
            <Stars
              radius={100}
              depth={100}
              count={10000}
              factor={6}
              saturation={0}
              fade={true} />
          </Canvas>
      
          }
        </div>)
}
