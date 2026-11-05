import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { GRIP_COLORS, findHex } from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import PlateStack from "../PlateStack/PlateStack";
import Collars from "../Collars/Collars";
import Rack from "../Rack/Rack";

const DumbbellModel = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);

  const grip = useConfigStore((state) => state.grip);
  const gripColor = useConfigStore((state) => state.gripColor);
  const rack = useConfigStore((state) => state.rack);

  const bar = nodes.Bar as Mesh;
  const handleKnurled = nodes.Handle_Knurled as Mesh;
  const handleErgo = nodes.Handle_Ergo as Mesh;

  const gripHex = findHex(GRIP_COLORS, gripColor);

  const dumbbellRef = useRef<Group>(null);

  //zonder rack zweeft de halter zacht op en neer, met rack ligt hij stil in de houder
  useFrame((state) => {
    if (!dumbbellRef.current) {
      return;
    }

    if (rack === "none") {
      const time = state.clock.elapsedTime;
      dumbbellRef.current.position.y = Math.sin(time) * 0.3;
      dumbbellRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      return;
    }

    dumbbellRef.current.position.y = 0;
    dumbbellRef.current.rotation.y = 0;
  });

  return (
    <group>
      <group ref={dumbbellRef}>
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
      </group>

      {rack === "stand" && <Rack />}
    </group>
  );
};

useGLTF.preload(MODEL_PATH, DRACO_PATH);

export default DumbbellModel;
