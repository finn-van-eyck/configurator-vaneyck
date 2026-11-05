import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { PLATE_PITCH, PLATE_START } from "../../../config/assembly";
import { FINISH_COLORS, findFinish, findHex } from "../../../config/options";
import type { PlateSize } from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import Plate from "../Plate/Plate";

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
  const finish = useConfigStore((state) => state.finish);
  const finishColor = useConfigStore((state) => state.finishColor);

  const largePlate = nodes[PLATE_MESHES[plateShape].large] as Mesh;
  const smallPlate = nodes[PLATE_MESHES[plateShape].small] as Mesh;

  //materiaal en kleur opzoeken op basis van de keuzes in de store
  const finishOption = findFinish(finish);
  const colorHex = findHex(FINISH_COLORS, finishColor);

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
      <Plate
        key={size + "-" + index}
        geometry={plate.geometry}
        x={PLATE_START + index * PLATE_PITCH}
        y={plate.position.y}
        rotation={plate.rotation}
        color={colorHex}
        metalness={finishOption.metalness}
        roughness={finishOption.roughness}
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
