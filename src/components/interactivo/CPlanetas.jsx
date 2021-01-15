import { useCallback } from 'react';
/* eslint-disable no-unused-vars */
import { markerEjemplo } from './../../helpers/markerEjemplo';
import { Stars } from 'drei';
import React from 'react'
import { Suspense, useState } from 'react';
import { Canvas, extend } from 'react-three-fiber';
import { Controls } from './componentesThree/Controls/Controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Navigation } from './componentesThree/Navigation/Navigation';
import { useSpring, animated, config } from "react-spring";
import { useDispatch, useSelector } from 'react-redux';
import { NavsHospitales } from './componentesThree/NavsHospitales/NavsHospitales';
import { Random } from 'random-js';
import { CMarker } from './componentesThree/Marker/CMarker';
import { setMakers } from '../../redux/ducks/PlanetasDuck';
import { CRoom } from './componentesThree/Room/CRoom';
import SoundPlanetas from '../../sounds/clickEs.mp3'
import { Howl } from 'howler';


let selectedItemIndex

const initialCameraPos = [18, 18, 18];
const initialControlsTarget = [0, 0, 0];

extend({ OrbitControls })
const sp = new Howl({
  src: SoundPlanetas
})
let markers2 = [
  {
    position: [0, 0, 0],
    cameraPos: [18, 18, 18],
    name: "camaraCentral",
    loc: [],
    id: 0,
    estatus_capacidad_hospitalaria: ""
  }
]
const random = new Random()


export const CPlanetas = ({handleChangeDate}) => {
  let id = 1
  const { datos } = useSelector(state => state.planetas)
  const [bandera, setBandera] = useState(0)
  const [cambiarDatos, setCambiarDatos] = useState([])
  const dispatch = useDispatch()


  datos.forEach(dato => {
    const uno = random.integer(-100, 100)
    const dos = random.integer(-100, 100)
    const tres = random.integer(-100, 100)

    markers2 = [
      ...markers2,
      {
        position: [uno, dos, tres],
        cameraPos: [uno, dos, tres + 10],
        name: dato.fields.nombre_hospital,
        id: id,
        loc: dato.fields.coordenadas,
        estatus_capacidad_hospitalaria: dato.fields.estatus_capacidad_hospitalaria
      }
    ]
    id++
  })






  useCallback(() => {
    if (bandera === 1) {
      dispatch(
        setMakers(
          markers2
        )


      )

      let arrayDePrueba = datos.map(dato => {
        const uno = random.integer(-100, 100)
        const dos = random.integer(-100, 100)
        const tres = random.integer(-100, 100)

        return {
          position: [uno, dos, tres],
          cameraPos: [uno, dos, tres + 100],
          name: dato.fields.nombre_hospital,
          id: id,
          loc: dato.fields.coordenadas,
          estatus_capacidad_hospitalaria: dato.fields.estatus_capacidad_hospitalaria
        }
      })

      console.log(arrayDePrueba)
      setCambiarDatos( arrayDePrueba )

    }

    setBandera(bandera + 1)
  }, [datos])

  console.log( cambiarDatos )

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

  const onNavigationItemClicked = (id, position, cameraPos) => {

    sp.play()

    if (selectedItemIndex !== id && !isAnimating) {
      selectedItemIndex = id;
      setIsAnimating(true);
      setCameraValues({
        cachedPos: cameraValues.pos,
        cachedTarget: cameraValues.cachedTarget,
        pos: cameraPos,
        target: position,
        autoRotate: id === 0,

      });
    }
  }



  return (
    <div className="content">
      <div className="ui">
        <NavsHospitales
          onNavigationItemClicked={onNavigationItemClicked}
          markers={markerEjemplo}
          handleChangeDate={handleChangeDate}
        />

      </div>
      {
        markerEjemplo.length === 0 ? null :
          <Canvas>

            <ambientLight />
            <pointLight
              position={[100, 100, 100]}
              intensity={2} />
            <AnimatedNavigation
              cameraPosition={cameraSpring.pos}
              cameraTarget={cameraSpring.target} />
            <CRoom
              position={[0, 0, 0]}
              markers2={markerEjemplo}
            />



            {isAnimating && markerEjemplo !== undefined ? null :
              <CMarker markers={markerEjemplo}
                markers2={markerEjemplo}

                selectedItemIndex={selectedItemIndex}
                onNavigationItemClicked={onNavigationItemClicked}
              />


            }
            <Suspense />
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
