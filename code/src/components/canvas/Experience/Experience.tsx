import { Environment, OrbitControls } from "@react-three/drei";
import DumbbellModel from "../DumbbellModel/DumbbellModel";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.36} />
      <directionalLight position={[4, 11, 9]} intensity={3.7} />
      <Environment preset="warehouse" environmentIntensity={0.32} />

      <OrbitControls makeDefault target={[0, 2, 0]} />

      <DumbbellModel />
    </>
  );
};

export default Experience;
