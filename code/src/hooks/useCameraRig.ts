import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";
import { useConfigStore } from "../store/useConfigStore";

const CAMERA_POSITIONS = {
  plates: [32, 13, 26],
  finish: [19, 15, 35],
  weight: [7, 9, 42],
  grip: [9, 24, 35],
  collar: [36, 11, 20],
  rack: [21, 13, 35],
  light: [24, 5, 36],
};

export const useCameraRig = () => {
  const camera = useThree((state) => state.camera);
  const currentStep = useConfigStore((state) => state.currentStep);

  useEffect(() => {
    const position = CAMERA_POSITIONS[currentStep];

    const tween = gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 1,
      ease: "power2.inOut",
    });

    return () => {
      tween.kill();
    };
  }, [currentStep, camera]);
};