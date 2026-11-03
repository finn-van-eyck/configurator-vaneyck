import { Link } from "react-router";
import { ROUTES } from "../../constants";
import styles from "./ConfiguratorPage.module.css";

const ConfiguratorPage = () => {
  return (
    <main className={styles.configurator}>
      <p className={styles.configurator__label}>Configurator</p>
      <Link to={ROUTES.HOME} className={styles.configurator__back}>
        Back
      </Link>
    </main>
  );
};

export default ConfiguratorPage;
