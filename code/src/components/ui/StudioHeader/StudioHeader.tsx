import { Link } from "react-router";
import { ROUTES } from "../../../constants";
import styles from "./StudioHeader.module.css";

const StudioHeader = () => {
  return (
    <header className={styles.header}>
      <Link
        to={ROUTES.HOME}
        className={styles.header__logo}
        aria-label="FORGE home"
      >
        <img src="/logo/forge-logo.svg" alt="FORGE" />
      </Link>
      <Link to={ROUTES.HOME} className={styles.header__back}>
        Back
      </Link>
    </header>
  );
};

export default StudioHeader;
