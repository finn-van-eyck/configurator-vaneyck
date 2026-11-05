import { useRef } from "react";
import { STEPS } from "../../../config/options";
import { useSlideIn } from "../../../hooks/useSlideIn";
import { useConfigStore } from "../../../store/useConfigStore";
import styles from "./StepHeading.module.css";

const StepHeading = () => {
  const currentStep = useConfigStore((state) => state.currentStep);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useSlideIn(titleRef, currentStep);

  const stepIndex = STEPS.findIndex((step) => step.id === currentStep);
  const step = STEPS[stepIndex];

  return (
    <section className={styles.heading}>
      <p className={styles.heading__label}>
        Stap 0{stepIndex + 1} — {step.label}
      </p>
      <h1 ref={titleRef} className={styles.heading__title}>
        {step.title}
      </h1>
      <span className={styles.heading__hint}>
        Sleep om te draaien. Scroll om te zoomen.
      </span>
    </section>
  );
};

export default StepHeading;
