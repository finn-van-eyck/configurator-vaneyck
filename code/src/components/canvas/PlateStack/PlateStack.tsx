import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { useConfigStore } from "../../../store/useConfigStore";
import type { PlateSize } from "../../../config/options";
import { PLATE_PITCH, PLATE_START } from "../../../config/assembly";

//welke Blender-mesh bij welke vorm en grootte hoort
const PLATE_MESHES = {
  round: { large: "Plate_Round", small: "Plate_Round_Small" },
  hex: { large: "Plate_Hex", small: "Plate_Hex_Small" },
  olympic: { large: "Plate_Olympic", small: "Plate_Olympic_Small" },
};

const PlateStack = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);

  const plateShape = useConfigStore((state) => state.plateShape);
  const plates = useConfigStore((state) => state.plates);

  const largePlate = nodes[PLATE_MESHES[plateShape].large] as Mesh;
  const smallPlate = nodes[PLATE_MESHES[plateShape].small] as Mesh;

  //lijst met de schijven van één kant: eerst de grote (dichtst bij het handvat), dan de kleine
  const sizes: PlateSize[] = [];
  for (let i = 0; i < plates.large; i++) {
    sizes.push("large");
  }
  for (let i = 0; i < plates.small; i++) {
    sizes.push("small");
  }

  const plateMeshes = sizes.map((size, index) => {
    let plate = largePlate;
    if (size === "small") {
      plate = smallPlate;
    }

    return (
      <mesh
        key={index}
        geometry={plate.geometry}
        material={plate.material}
        position={[PLATE_START + index * PLATE_PITCH, plate.position.y, 0]}
        rotation={plate.rotation}
      />
    );
  });

  return (
    <>
      <group>{plateMeshes}</group>
      <group rotation-y={Math.PI}>{plateMeshes}</group>
    </>
  );
};

export default PlateStack;
