import { useTexture } from "@react-three/drei";
import type { Texture } from "three";


const TEXTURE_PATHS = [
  "/textures/plates_iron_normal.jpg",
  "/textures/plates_iron_roughness.jpg",
  "/textures/plates_rubber_normal.jpg",
  "/textures/plates_rubber_roughness.jpg",
  "/textures/knurl_normal.jpg",
  "/textures/grip_normal.jpg",
  "/textures/rack_normal.jpg",
  "/textures/rack_roughness.jpg",
];

//het glb-model verwacht textures rechtop three.js laad dezee standaard ondersteboven
const prepareTextures = (textures: Texture[]) => {
  textures.forEach((texture) => {
    texture.flipY = false;
    texture.needsUpdate = true;
  });
};

export const useBakedTextures = () => {
  const [
    ironNormal,
    ironRoughness,
    rubberNormal,
    rubberRoughness,
    knurlNormal,
    gripNormal,
    rackNormal,
    rackRoughness,
  ] = useTexture(TEXTURE_PATHS, prepareTextures);

  return {
    ironNormal,
    ironRoughness,
    rubberNormal,
    rubberRoughness,
    knurlNormal,
    gripNormal,
    rackNormal,
    rackRoughness,
  };
};

useTexture.preload(TEXTURE_PATHS);