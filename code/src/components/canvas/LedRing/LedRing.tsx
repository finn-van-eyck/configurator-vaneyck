import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh, MeshStandardMaterial } from "three";
import { DRACO_PATH, MODEL_PATH } from "../../../constants";
import { LED_COLORS, findHex } from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";

const LED_INTENSITY = 2.5;

const LedRing = () => {
  const { nodes } = useGLTF(MODEL_PATH, DRACO_PATH);
  const ledStrip = nodes.LED_Strip as Mesh;

  const ledMode = useConfigStore((state) => state.ledMode);
  const ledColor = useConfigStore((state) => state.ledColor);
  const ledEffect = useConfigStore((state) => state.ledEffect);

  const ledHex = findHex(LED_COLORS, ledColor);
  const materialRef = useRef<MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!materialRef.current) {
      return;
    }

    if (ledMode === "off") {
      materialRef.current.emissiveIntensity = 0;
      return;
    }

    if (ledEffect === "pulse") {
      const wave = Math.sin((state.clock.elapsedTime / 1.5) * Math.PI * 2);
      materialRef.current.emissiveIntensity = 1.5 + wave;
      return;
    }

    materialRef.current.emissiveIntensity = LED_INTENSITY;
  });

  return (
    <mesh geometry={ledStrip.geometry} position={ledStrip.position}>
      <meshStandardMaterial
        ref={materialRef}
        color="#111111"
        emissive={ledHex}
        emissiveIntensity={LED_INTENSITY}
        toneMapped={false}
      />
    </mesh>
  );
};

export default LedRing;
