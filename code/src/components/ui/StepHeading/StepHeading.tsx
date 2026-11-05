import { STEPS } from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import styles from "./StepHeading.module.css";

const StepHeading = () => {
  //eerst id zoeken in store
  const currentStep = useConfigStore((state) => state.currentStep);
  //vervolgens de index gaan zoeken van id
  const stepIndex = STEPS.findIndex((step) => step.id === currentStep);
  //index gebruiken om het object te kunnene gebruiken en er zaken uit te kunnen halen zoals bv het label
  const step = STEPS[stepIndex];

  return (
    <section className={styles.heading}>
      <p className={styles.heading__label}>
        {/* zorgt ervoor dat ik 01 krijg ipv 1 */}
        Stap 0{stepIndex + 1} — {step.label}
      </p>
      <h1 className={styles.heading__title}>{step.title}</h1>
      <span className={styles.heading__hint}>
        Sleep om draaien, Scroll om te zoomen.
      </span>
    </section>
  );
};

export default StepHeading;
