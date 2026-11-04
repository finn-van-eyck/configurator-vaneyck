import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { useConfigStore } from "../../../store/useConfigStore";
import {
  COLLAR_OFFSETS,
  PLATE_HALF_THICKNESS,
  PLATE_PITCH,
  PLATE_START,
} from "../../../config/assembly";

//welke Blender-mesh bij welke sluiting hoort
const COLLAR_MESHES = {
  screw: "Collar_Screw",
  quick: "Collar_Quick",
};

const Collars = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);

  const collarType = useConfigStore((state) => state.collar);
  const plates = useConfigStore((state) => state.plates);

  const collar = nodes[COLLAR_MESHES[collarType]] as Mesh;

  //de sluiting komt net na de buitenkant van de laatste schijf
  const plateCount = plates.large + plates.small;
  const lastPlateCenter = PLATE_START + (plateCount - 1) * PLATE_PITCH;
  const lastPlateEdge = lastPlateCenter + PLATE_HALF_THICKNESS;
  const collarX = lastPlateEdge + COLLAR_OFFSETS[collarType];

  const collarMesh = (
    <mesh
      geometry={collar.geometry}
      material={collar.material}
      position={[collarX, collar.position.y, 0]}
      rotation={collar.rotation}
    />
  );

  return (
    <>
      <group>{collarMesh}</group>
      <group rotation-y={Math.PI}>{collarMesh}</group>
    </>
  );
};

export default Collars;
