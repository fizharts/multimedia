import React, { useRef } from "react";
import { OrbitControls } from "drei";
import { useThree, useFrame } from "react-three-fiber";

export const Controls = ({
    autoRotate,
    enabled,
    target
  }) => {
    const controls = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        if (controls && controls.current && controls.current.update && enabled) {
            controls.current?.update();
        }
    });

    return enabled ? <OrbitControls
        enabled={enabled}
        ref={controls}
        target={target}
        args={[camera, gl.domElement]}
        enableDamping
        enableZoom={true}
        enableKeys={false}
        enablePan={false}
        dampingFactor={0.1}
        rotateSpeed={0.3}
        autoRotate={autoRotate}
        autoRotateSpeed={0.4}/> :
        null
}

