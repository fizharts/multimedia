import React from "react";
import { Html } from "drei";
import Nav from "react-bootstrap/esm/Nav";
import { useSpring, animated, config } from "react-spring";

export const  Marker = (props) =>  {

  const markerSpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
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
    props.onMarkerClicked(props.id);
  }

  return (
    <mesh position={props.position}>
      <Html scaleFactor={100}>
        <animated.div className="overlay" style={markerSpring} onClick={onClick}>
          <div className="circle box">{props.id}</div>
          <div className="box">
            <Nav.Link className="text-overlay">{props.name}</Nav.Link>
          </div>
        </animated.div>
        <animated.div className="info" style={infoSpring}>
          <p>
            Datos del hospital
          </p>
        </animated.div>
      </Html>
    </mesh>
  );
}

