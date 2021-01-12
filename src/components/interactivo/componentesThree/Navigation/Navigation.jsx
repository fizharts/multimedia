import { useThree } from "react-three-fiber";

export const Navigation = ({
  cameraPosition,
  cameraTarget,
}) => {

  const { camera } = useThree();
  camera.position.set(...cameraPosition);
  camera.lookAt(...cameraTarget);
  camera.updateProjectionMatrix();

  return null;
}

