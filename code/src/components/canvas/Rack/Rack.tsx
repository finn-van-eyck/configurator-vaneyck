import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { RACK_COLORS, findHex } from "../../../config/options";
import { useAppear } from "../../../hooks/useAppear";
import { useBakedTextures } from "../../../hooks/useBakedTextures";
import { useConfigStore } from "../../../store/useConfigStore";
import LedRing from "../LedRing/LedRing";

const Rack = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);
  const rackStand = nodes.Rack_Stand as Mesh;
  const textures = useBakedTextures();

  const rackColor = useConfigStore((state) => state.rackColor);
  const rackHex = findHex(RACK_COLORS, rackColor);

  const rackRef = useRef<Mesh>(null);

  //het rack komt van onder uit de vloer
  useAppear(rackRef, 0, -6);

  return (
    <mesh
      ref={rackRef}
      geometry={rackStand.geometry}
      position={rackStand.position}
    >
      <meshStandardMaterial
        color={rackHex}
        metalness={0.3}
        roughness={0.55}
        normalMap={textures.rackNormal}
        roughnessMap={textures.rackRoughness}
      />
      <LedRing />
    </mesh>
  );
};

export default Rack;
