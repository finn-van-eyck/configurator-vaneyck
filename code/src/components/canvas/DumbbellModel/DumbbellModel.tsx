import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { useConfigStore } from "../../../store/useConfigStore";
import PlateStack from "../PlateStack/PlateStack";
import Collars from "../Collars/Collars";

const DumbbellModel = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);

  const grip = useConfigStore((state) => state.grip);
  const rack = useConfigStore((state) => state.rack);

  const bar = nodes.Bar as Mesh;
  const handleKnurled = nodes.Handle_Knurled as Mesh;
  const handleErgo = nodes.Handle_Ergo as Mesh;
  const rackStand = nodes.Rack_Stand as Mesh;
  const ledStrip = nodes.LED_Strip as Mesh;

  //het handvat dat getoond wordt hangt af van de keuze in de store
  let handle = handleKnurled;
  if (grip === "ergo") {
    handle = handleErgo;
  }

  return (
    <group>
      <mesh
        geometry={bar.geometry}
        material={bar.material}
        position={bar.position}
        rotation={bar.rotation}
      />

      <mesh
        geometry={handle.geometry}
        material={handle.material}
        position={handle.position}
        rotation={handle.rotation}
      />

      <PlateStack />
      <Collars />

      {rack === "stand" && (
        <mesh
          geometry={rackStand.geometry}
          material={rackStand.material}
          position={rackStand.position}
        >
          <mesh
            geometry={ledStrip.geometry}
            material={ledStrip.material}
            position={ledStrip.position}
          />
        </mesh>
      )}
    </group>
  );
};

useGLTF.preload(MODEL_PATH, DRACO_PATH);

export default DumbbellModel;
