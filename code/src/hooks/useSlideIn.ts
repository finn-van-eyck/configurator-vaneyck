import gsap from "gsap";
import { useEffect } from "react";
import type { RefObject } from "react";

//laat een element zacht invaden en van links inschuiven, telkens als "trigger" verandert
export const useSlideIn = (ref: RefObject<HTMLElement | null>, trigger: string) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const tween = gsap.fromTo(
      ref.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
    );

    return () => {
      tween.kill();
    };
  }, [ref, trigger]);
};