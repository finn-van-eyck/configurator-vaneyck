import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import DumbbellModel from "../DumbbellModel/DumbbellModel";

const HeroScene = () => {
  return (
    <Canvas camera={{ fov: 32, position: [24, 10, 30] }} dpr={1}>
      <ambientLight intensity={0.36} />
      <directionalLight position={[4, 11, 9]} intensity={3.7} />
      <Suspense fallback={null}>
        <Environment preset="warehouse" environmentIntensity={0.32} />
        <DumbbellModel />
      </Suspense>
      <OrbitControls
        target={[0, 1.5, 0]}
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default HeroScene;
