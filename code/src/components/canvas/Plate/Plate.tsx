import { useRef } from "react";
import type { BufferGeometry, Euler, Mesh, Texture } from "three";
import { useAppear } from "../../../hooks/useAppear";

type PlateProps = {
  geometry: BufferGeometry;
  x: number;
  y: number;
  rotation: Euler;
  color: string;
  metalness: number;
  roughness: number;
  normalMap: Texture | null;
  roughnessMap: Texture | null;
  finishId: string;
};

const Plate = ({
  geometry,
  x,
  y,
  rotation,
  color,
  metalness,
  roughness,
  normalMap,
  roughnessMap,
  finishId,
}: PlateProps) => {
  const plateRef = useRef<Mesh>(null);

  //een nieuwe schijf vliegt van buiten de stang naar zijn plek
  useAppear(plateRef, 4, 0);

  return (
    <mesh
      ref={plateRef}
      geometry={geometry}
      position={[x, y, 0]}
      rotation={rotation}
    >
      <meshStandardMaterial
        key={finishId}
        color={color}
        metalness={metalness}
        roughness={roughness}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
};

export default Plate;
