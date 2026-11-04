import { Link } from "react-router";
import { ROUTES } from "../../constants";
import { useConfigStore } from "../../store/useConfigStore";
import styles from "./ConfiguratorPage.module.css";

const ConfiguratorPage = () => {
  const currentStep = useConfigStore((state) => state.currentStep);
  const plateShape = useConfigStore((state) => state.plateShape);

  return (
    <main className={styles.configurator}>
      <p className={styles.configurator__label}>
        {currentStep} / {plateShape}
      </p>
      <Link to={ROUTES.HOME} className={styles.configurator__back}>
        Back
      </Link>
    </main>
  );
};

export default ConfiguratorPage;
