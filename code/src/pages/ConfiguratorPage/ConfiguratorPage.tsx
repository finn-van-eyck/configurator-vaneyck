import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../constants";
import {
  FINISHES,
  FINISH_COLORS,
  GRIP_COLORS,
  LED_COLORS,
  LED_EFFECTS,
  LED_MODES,
  RACK_COLORS,
} from "../../config/options";
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
  const setFinish = useConfigStore((state) => state.setFinish);
  const setFinishColor = useConfigStore((state) => state.setFinishColor);
  const reset = useConfigStore((state) => state.reset);
  const setGripColor = useConfigStore((state) => state.setGripColor);
  const setRackColor = useConfigStore((state) => state.setRackColor);
  const setLedMode = useConfigStore((state) => state.setLedMode);
  const setLedColor = useConfigStore((state) => state.setLedColor);
  const setLedEffect = useConfigStore((state) => state.setLedEffect);
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

        <button type="button" onClick={() => setCollar("screw")}>
          Screw
        </button>
        <button type="button" onClick={() => setCollar("quick")}>
          Quick
        </button>

        <button type="button" onClick={() => setRack("stand")}>
          Rack aan
        </button>
        <button type="button" onClick={() => setRack("none")}>
          Rack uit
        </button>

        {FINISHES.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setFinish(option.id)}
          >
            {option.label}
          </button>
        ))}

        {FINISH_COLORS.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => setFinishColor(color.id)}
          >
            {color.label}
          </button>
        ))}

        {GRIP_COLORS.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => setGripColor(color.id)}
          >
            Grip {color.label}
          </button>
        ))}

        {RACK_COLORS.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => setRackColor(color.id)}
          >
            Rack {color.label}
          </button>
        ))}

        {LED_MODES.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setLedMode(option.id)}
          >
            LED {option.label}
          </button>
        ))}

        {LED_COLORS.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => setLedColor(color.id)}
          >
            LED {color.label}
          </button>
        ))}

        {LED_EFFECTS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setLedEffect(option.id)}
          >
            {option.label}
          </button>
        ))}
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
