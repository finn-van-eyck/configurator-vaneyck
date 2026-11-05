import { useRef } from "react";
import type { BufferGeometry, Euler, Mesh } from "three";
import { useAppear } from "../../../hooks/useAppear";

type PlateProps = {
  geometry: BufferGeometry;
  x: number;
  y: number;
  rotation: Euler;
  color: string;
  metalness: number;
  roughness: number;
};

const Plate = ({
  geometry,
  x,
  y,
  rotation,
  color,
  metalness,
  roughness,
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
        color={color}
        metalness={metalness}
        roughness={roughness}
      />
    </mesh>
  );
};

export default Plate;
