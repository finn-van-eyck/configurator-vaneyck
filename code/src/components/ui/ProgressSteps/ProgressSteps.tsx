import { STEPS } from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import styles from "./ProgressSteps.module.css";

const ProgressSteps = () => {
  const currentStep = useConfigStore((state) => state.currentStep);
  const setCurrentStep = useConfigStore((state) => state.setCurrentStep);
  const stepIndex = STEPS.findIndex((step) => step.id === currentStep);

  return (
    <nav className={styles.progressSteps} aria-label="Stappen">
      <ol className={styles.progressSteps__list}>
        {STEPS.map((step, index) => {
          let status = "upcoming";
          if (index < stepIndex) {
            status = "completed";
          }
          if (index === stepIndex) {
            status = "active";
          }

          const stepClassNames = [
            styles.progressSteps__step,
            styles[`progressSteps__step--${status}`],
          ].join(" ");

          return (
            <li key={step.id}>
              <button
                type="button"
                className={stepClassNames}
                onClick={() => setCurrentStep(step.id)}
              >
                <span className={styles.progressSteps__number}>
                  0{index + 1}
                </span>
                {step.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ProgressSteps;
