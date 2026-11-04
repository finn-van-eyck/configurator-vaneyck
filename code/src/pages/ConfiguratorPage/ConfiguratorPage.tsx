import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../constants";
import { useConfigStore } from "../../store/useConfigStore";
import { useTotals } from "../../hooks/useTotals";
import Experience from "../../components/canvas/Experience/Experience";
import LoadingScreen from "../../components/ui/LoadingScreen/LoadingScreen";
import styles from "./ConfiguratorPage.module.css";

const ConfiguratorPage = () => {
  const plateShape = useConfigStore((state) => state.plateShape);
  const plates = useConfigStore((state) => state.plates);

  const setPlateShape = useConfigStore((state) => state.setPlateShape);
  const addPlate = useConfigStore((state) => state.addPlate);
  const removePlate = useConfigStore((state) => state.removePlate);
  const setGrip = useConfigStore((state) => state.setGrip);
  const setRack = useConfigStore((state) => state.setRack);
  const setCollar = useConfigStore((state) => state.setCollar);
  const reset = useConfigStore((state) => state.reset);

  const { price, weight } = useTotals();

  return (
    <main className={styles.configurator}>
      <div className={styles.configurator__canvas}>
        <Canvas camera={{ fov: 32, position: [18, 10, 26] }} dpr={1}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.configurator__ui}>
        <p className={styles.configurator__label}>
          {plateShape} / large {plates.large} / small {plates.small}
        </p>
        <p className={styles.configurator__label}>
          €{price} / {weight} kg
        </p>

        <button type="button" onClick={() => setPlateShape("round")}>
          Round
        </button>
        <button type="button" onClick={() => setPlateShape("hex")}>
          Hex
        </button>
        <button type="button" onClick={() => setPlateShape("olympic")}>
          Olympic
        </button>

        <button type="button" onClick={() => addPlate("large")}>
          + large
        </button>
        <button type="button" onClick={() => removePlate("large")}>
          - large
        </button>
        <button type="button" onClick={() => addPlate("small")}>
          + small
        </button>
        <button type="button" onClick={() => removePlate("small")}>
          - small
        </button>

        <button type="button" onClick={() => setGrip("knurled")}>
          Knurled
        </button>
        <button type="button" onClick={() => setGrip("ergo")}>
          Ergo
        </button>

        <button type="button" onClick={() => setRack("stand")}>
          Rack aan
        </button>
        <button type="button" onClick={() => setRack("none")}>
          Rack uit
        </button>

        <button type="button" onClick={() => setCollar("screw")}>
          Screw
        </button>
        <button type="button" onClick={() => setCollar("quick")}>
          Quick
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>

        <Link to={ROUTES.HOME} className={styles.configurator__back}>
          Back
        </Link>
      </div>

      <LoadingScreen />
    </main>
  );
};

export default ConfiguratorPage;
