import { Environment, OrbitControls } from "@react-three/drei";
import { useCameraRig } from "../../../hooks/UseCameraRig";
import DumbbellModel from "../DumbbellModel/DumbbellModel";

const Experience = () => {
  useCameraRig();

  return (
    <>
      <ambientLight intensity={0.36} />
      <directionalLight position={[4, 11, 9]} intensity={3.7} />
      <Environment preset="warehouse" environmentIntensity={0.32} />

      <OrbitControls makeDefault target={[0, 1, 0]} />
      <DumbbellModel />
    </>
  );
};

export default Experience;
