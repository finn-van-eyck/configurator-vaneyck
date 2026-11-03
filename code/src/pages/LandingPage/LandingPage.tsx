import { Link } from "react-router";
import { ROUTES } from "../../constants";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main className={styles.landing}>
      <h1 className={styles.landing__title}>
        Forge your <span className={styles.landing__accent}>build.</span>
      </h1>
      <Link to={ROUTES.CONFIGURE} className={styles.landing__link}>
        Start building
      </Link>
    </main>
  );
};

export default LandingPage;
