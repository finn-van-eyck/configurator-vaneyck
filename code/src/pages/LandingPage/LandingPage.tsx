import { useRef } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../constants";
import HeroScene from "../../components/canvas/HeroScene/HeroScene";
import { useSlideIn } from "../../hooks/useSlideIn";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useSlideIn(textRef, "landing");

  return (
    <div className={styles.landing}>
      <nav className={styles.landing__nav}>
        <img
          src="/logo/forge-logo.svg"
          alt="FORGE"
          className={styles.landing__logo}
        />
        <Link to={ROUTES.CONFIGURE} className={styles.landing__navLink}>
          Configureer
        </Link>
      </nav>

      <main className={styles.hero}>
        <div ref={textRef} className={styles.hero__text}>
          <p className={styles.hero__label}>F / 01 — Halter op maat</p>
          <h1 className={styles.hero__title}>
            Forge your <span className={styles.hero__accent}>build.</span>
          </h1>
          <p className={styles.hero__intro}>
            Een halter gebouwd rond jouw training, jouw ruimte en jouw
            standaard.
          </p>
          <Link to={ROUTES.CONFIGURE} className={styles.hero__button}>
            Begin met bouwen
          </Link>
        </div>

        <div className={styles.hero__scene}>
          <HeroScene />
          <p className={styles.hero__caption}>Custom DB / 01</p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
