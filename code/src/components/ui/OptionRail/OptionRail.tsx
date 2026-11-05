import {
  COLLARS,
  FINISHES,
  FINISH_COLORS,
  GRIPS,
  GRIP_COLORS,
  LED_COLORS,
  LED_EFFECTS,
  LED_MODES,
  PLATE_SHAPES,
  RACKS,
  RACK_COLORS,
} from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import OptionCard from "../OptionCard/OptionCard";
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "./OptionRail.module.css";

const OptionRail = () => {
  const currentStep = useConfigStore((state) => state.currentStep);

  const plateShape = useConfigStore((state) => state.plateShape);
  const finish = useConfigStore((state) => state.finish);
  const finishColor = useConfigStore((state) => state.finishColor);
  const grip = useConfigStore((state) => state.grip);
  const gripColor = useConfigStore((state) => state.gripColor);
  const collar = useConfigStore((state) => state.collar);
  const rack = useConfigStore((state) => state.rack);
  const rackColor = useConfigStore((state) => state.rackColor);
  const ledMode = useConfigStore((state) => state.ledMode);
  const ledColor = useConfigStore((state) => state.ledColor);
  const ledEffect = useConfigStore((state) => state.ledEffect);

  const setPlateShape = useConfigStore((state) => state.setPlateShape);
  const setFinish = useConfigStore((state) => state.setFinish);
  const setFinishColor = useConfigStore((state) => state.setFinishColor);
  const setGrip = useConfigStore((state) => state.setGrip);
  const setGripColor = useConfigStore((state) => state.setGripColor);
  const setCollar = useConfigStore((state) => state.setCollar);
  const setRack = useConfigStore((state) => state.setRack);
  const setRackColor = useConfigStore((state) => state.setRackColor);
  const setLedMode = useConfigStore((state) => state.setLedMode);
  const setLedColor = useConfigStore((state) => state.setLedColor);
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
        <ColorPicker
          label="Kleur"
          colors={FINISH_COLORS}
          selectedId={finishColor}
          onSelect={setFinishColor}
        />
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
        {grip === "ergo" && (
          <ColorPicker
            label="Gripkleur"
            colors={GRIP_COLORS}
            selectedId={gripColor}
            onSelect={setGripColor}
          />
        )}
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
        {rack === "stand" && (
          <ColorPicker
            label="Rackkleur"
            colors={RACK_COLORS}
            selectedId={rackColor}
            onSelect={setRackColor}
          />
        )}
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
        {ledMode === "on" && (
          <>
            <ColorPicker
              label="Ledkleur"
              colors={LED_COLORS}
              selectedId={ledColor}
              onSelect={setLedColor}
            />
            {LED_EFFECTS.map((option) => (
              <OptionCard
                key={option.id}
                label={option.label}
                selected={option.id === ledEffect}
                onClick={() => setLedEffect(option.id)}
              />
            ))}
          </>
        )}
      </div>
    );
  }

  return null;
};

export default OptionRail;
