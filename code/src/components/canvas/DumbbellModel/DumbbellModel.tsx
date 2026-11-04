import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/dumbell.glb";
const DRACO_PATH = "/draco/";

const DumbbellModel = () => {
  const { scene } = useGLTF(MODEL_PATH, DRACO_PATH);

  return <primitive object={scene} />;
};

//model al beginnen laden voordat het component getoond wordt
useGLTF.preload(MODEL_PATH, DRACO_PATH);

export default DumbbellModel;
