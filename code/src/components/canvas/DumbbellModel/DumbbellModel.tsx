import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { GRIP_COLORS, RACK_COLORS, findHex } from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import PlateStack from "../PlateStack/PlateStack";
import Collars from "../Collars/Collars";

const DumbbellModel = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);

  const grip = useConfigStore((state) => state.grip);
  const gripColor = useConfigStore((state) => state.gripColor);
  const rack = useConfigStore((state) => state.rack);
  const rackColor = useConfigStore((state) => state.rackColor);

  const bar = nodes.Bar as Mesh;
  const handleKnurled = nodes.Handle_Knurled as Mesh;
  const handleErgo = nodes.Handle_Ergo as Mesh;
  const rackStand = nodes.Rack_Stand as Mesh;
  const ledStrip = nodes.LED_Strip as Mesh;

  const gripHex = findHex(GRIP_COLORS, gripColor);
  const rackHex = findHex(RACK_COLORS, rackColor);

  return (
    <group>
      <mesh
        geometry={bar.geometry}
        material={bar.material}
        position={bar.position}
        rotation={bar.rotation}
      />

      {grip === "knurled" && (
        <mesh
          geometry={handleKnurled.geometry}
          material={handleKnurled.material}
          position={handleKnurled.position}
          rotation={handleKnurled.rotation}
        />
      )}

      {grip === "ergo" && (
        <mesh
          geometry={handleErgo.geometry}
          position={handleErgo.position}
          rotation={handleErgo.rotation}
        >
          <meshStandardMaterial
            color={gripHex}
            metalness={0}
            roughness={0.85}
          />
        </mesh>
      )}

      <PlateStack />
      <Collars />

      {rack === "stand" && (
        <mesh geometry={rackStand.geometry} position={rackStand.position}>
          <meshStandardMaterial
            color={rackHex}
            metalness={0.3}
            roughness={0.55}
          />
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
