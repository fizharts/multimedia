import React, { Suspense , useState } from "react";
import { Html } from "drei";
import Nav from "react-bootstrap/esm/Nav";
import { useSpring, animated, config } from "react-spring";
// import start from '../../../../sounds/clickEs.mp3'
// import { Howl } from 'howler';
import { Loading } from "../../../loaders/Loading";

export const Marker = (props) => {

  const [fuente, setFuente] = useState('')
  
  const markerSpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    top: '-10px',
    config: config.slow,
  })




  const infoSpring = useSpring({
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    transform: props.id === props.selected ? 'scale(1)' : 'scale(0)',
    from: {
      transform: 'scale(0)'
    }
  })

  function onClick() {
    console.log(props)

    props.onMarkerClicked(props.id, props.position, props.cameraPos);
    setFuente({
      fontSize:'4px!important;'
    })

  }
  // AIzaSyBL8XsAWI8IBe_ks49R_FgL9WzyAs-Usik

  return (
    <Suspense fallback={Loading}>
      <mesh position={props.position}>
      <Html scaleFactor={100}>
        <animated.div className="overlay" style={markerSpring} onClick={onClick}>
          <div className="circle box">{props.id}</div>
          <div className="box">
            <Nav.Link className="text-overlay" style={infoSpring}>{props.name}</Nav.Link>
          </div>
        </animated.div>
        <animated.div className="info" style={infoSpring}>

          {/* <Maps loc={ props.loc }/> */}
          {
            props.position
          }
        </animated.div>
      </Html>
    </mesh>
    </Suspense>
  );
}

