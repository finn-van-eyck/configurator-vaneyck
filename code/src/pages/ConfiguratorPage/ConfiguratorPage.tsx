import { Link } from "react-router";
import { ROUTES } from "../../constants";
import { useConfigStore } from "../../store/useConfigStore";
import styles from "./ConfiguratorPage.module.css";
import { useTotals } from "../../hooks/useTotals";

const ConfiguratorPage = () => {
  const plateShape = useConfigStore((state) => state.plateShape);
  const plates = useConfigStore((state) => state.plates);

  const setPlateShape = useConfigStore((state) => state.setPlateShape);
  const addPlate = useConfigStore((state) => state.addPlate);
  const removePlate = useConfigStore((state) => state.removePlate);
  const reset = useConfigStore((state) => state.reset);
  const { price, weight } = useTotals();

  return (
    <main className={styles.configurator}>
      <p className={styles.configurator__label}>
        {plateShape} / large {plates.large} / small {plates.small}
      </p>

      <button type="button" onClick={() => setPlateShape("olympic")}>
        Olympic
      </button>
      <button type="button" onClick={() => addPlate("large")}>
        + large
      </button>
      <button type="button" onClick={() => removePlate("large")}>
        - large
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>

      <p className={styles.configurator__label}>
        €{price} / {weight} kg
      </p>

      <Link to={ROUTES.HOME} className={styles.configurator__back}>
        Back
      </Link>
    </main>
  );
};

export default ConfiguratorPage;
