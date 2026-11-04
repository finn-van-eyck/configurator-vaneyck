import { useProgress } from "@react-three/drei";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const { active, progress } = useProgress();

  //als er niets meer aan het laden is dan verdwijnt het laadscherm
  if (!active) {
    return null;
  }

  const percentage = Math.round(progress);

  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <p className={styles.loading__logo}>FORGE</p>
      <div className={styles.loading__track}>
        <div
          className={styles.loading__bar}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className={styles.loading__label}>Loading {percentage}%</p>
    </div>
  );
};

export default LoadingScreen;
