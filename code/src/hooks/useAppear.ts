import gsap from "gsap";
import { useEffect } from "react";
import type { RefObject } from "react";
import type { Object3D } from "three";

//laat een 3D-object naar zijn eigen plek glijden op het moment dat het verschijnt
export const useAppear = (ref: RefObject<Object3D | null>, offsetX: number, offsetY: number) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const position = ref.current.position;

    const tween = gsap.from(position, {
      x: position.x + offsetX,
      y: position.y + offsetY,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => {
      tween.revert();
    };
  }, [ref, offsetX, offsetY]);
};