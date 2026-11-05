import {
  COLLARS,
  FINISHES,
  GRIPS,
  LED_EFFECTS,
  LED_MODES,
  PLATE_SHAPES,
  RACKS,
} from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import OptionCard from "../OptionCard/OptionCard";
import styles from "./OptionRail.module.css";

const OptionRail = () => {
  const currentStep = useConfigStore((state) => state.currentStep);

  const plateShape = useConfigStore((state) => state.plateShape);
  const finish = useConfigStore((state) => state.finish);
  const grip = useConfigStore((state) => state.grip);
  const collar = useConfigStore((state) => state.collar);
  const rack = useConfigStore((state) => state.rack);
  const ledMode = useConfigStore((state) => state.ledMode);
  const ledEffect = useConfigStore((state) => state.ledEffect);

  const setPlateShape = useConfigStore((state) => state.setPlateShape);
  const setFinish = useConfigStore((state) => state.setFinish);
  const setGrip = useConfigStore((state) => state.setGrip);
  const setCollar = useConfigStore((state) => state.setCollar);
  const setRack = useConfigStore((state) => state.setRack);
  const setLedMode = useConfigStore((state) => state.setLedMode);
  const setLedEffect = useConfigStore((state) => state.setLedEffect);

  if (currentStep === "plates") {
    return (
      <div className={styles.optionRail}>
        {PLATE_SHAPES.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            price={option.price}
            selected={option.id === plateShape}
            onClick={() => setPlateShape(option.id)}
          />
        ))}
      </div>
    );
  }

  if (currentStep === "finish") {
    return (
      <div className={styles.optionRail}>
        {FINISHES.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            price={option.price}
            selected={option.id === finish}
            onClick={() => setFinish(option.id)}
          />
        ))}
      </div>
    );
  }

  if (currentStep === "grip") {
    return (
      <div className={styles.optionRail}>
        {GRIPS.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            price={option.price}
            selected={option.id === grip}
            onClick={() => setGrip(option.id)}
          />
        ))}
      </div>
    );
  }

  if (currentStep === "collar") {
    return (
      <div className={styles.optionRail}>
        {COLLARS.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            price={option.price}
            selected={option.id === collar}
            onClick={() => setCollar(option.id)}
          />
        ))}
      </div>
    );
  }

  if (currentStep === "rack") {
    return (
      <div className={styles.optionRail}>
        {RACKS.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            price={option.price}
            selected={option.id === rack}
            onClick={() => setRack(option.id)}
          />
        ))}
      </div>
    );
  }

  //zonder rack is er geen led
  if (currentStep === "light" && rack === "none") {
    return (
      <div className={styles.optionRail}>
        <div className={styles.optionRail__message}>
          <p>Led-ring niet beschikbaar</p>
          <button type="button" onClick={() => setRack("stand")}>
            Voeg eerst de standaard toe
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === "light") {
    return (
      <div className={styles.optionRail}>
        {LED_MODES.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            price={option.price}
            selected={option.id === ledMode}
            onClick={() => setLedMode(option.id)}
          />
        ))}
        {LED_EFFECTS.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            selected={option.id === ledEffect}
            onClick={() => setLedEffect(option.id)}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default OptionRail;
