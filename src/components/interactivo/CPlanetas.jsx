import { Stars } from 'drei';
import React, { useEffect } from 'react'
import { Suspense, useState } from 'react';

import { Canvas, extend } from 'react-three-fiber';
import { Controls } from './componentesThree/Controls/Controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Room from './componentesThree/Room/Room';
import { Navigation } from './componentesThree/Navigation/Navigation';
import { useSpring, animated, config } from "react-spring";

import { useDispatch, useSelector } from 'react-redux';
import { NavsHospitales } from './componentesThree/NavsHospitales/NavsHospitales';
import { Random } from 'random-js';
import { CMarker } from './componentesThree/Marker/CMarker';
import { crearMaker } from '../../helpers/fun';
import { setMakers } from '../../redux/ducks/PlanetasDuck';



let selectedItemIndex

const initialCameraPos = [18, 18, 18];
const initialControlsTarget = [0, 0, 0];

extend({ OrbitControls })


export const CPlanetas = () => {
  
  const { datos , markerRedux } = useSelector(state => state.planetas)
  const [bandera, setBandera] = useState(0)
  const dispatch = useDispatch()
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
    let uno = random.integer(-100,100)
    let dos = random.integer(-100,100)
    let tres = random.integer(-100,100)
    
    markers2 = [
      ...markers2 ,
          {
        position:[uno , dos , tres],
        cameraPos : [uno+10 , dos + 10 , tres + 10],
        name: dato.fields.nombre_hospital ,
        id : id ,
        loc : dato.fields.coordenadas
      }
    ]
    id ++
  })


  useEffect(() => {
    if( bandera === 1 ){
      const [ d ] = crearMaker( datos )
      console.log( datos )
      dispatch( 
        setMakers( 
          d
        )
      )

      
    }

    setBandera(bandera +1 )
    
  
  }, [datos])
    
  



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

    const  onNavigationItemClicked = (id ,  position , cameraPos) => {
    
      alert(position)
      alert(cameraPos)
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
                        markers2={ markers2 }
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
