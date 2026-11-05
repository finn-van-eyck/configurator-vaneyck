import {
  MAX_PLATES_PER_SIDE,
  MIN_PLATES_PER_SIDE,
  PLATE_WEIGHTS,
  getTotalWeight,
} from "../../../config/options";
import { useConfigStore } from "../../../store/useConfigStore";
import styles from "./WeightPicker.module.css";

const WeightPicker = () => {
  const plates = useConfigStore((state) => state.plates);
  const addPlate = useConfigStore((state) => state.addPlate);
  const removePlate = useConfigStore((state) => state.removePlate);

  const platesPerSide = plates.large + plates.small;

  let disableAdd = false;
  if (platesPerSide >= MAX_PLATES_PER_SIDE) {
    disableAdd = true;
  }

  let disableRemoveLarge = false;
  if (platesPerSide <= MIN_PLATES_PER_SIDE) {
    disableRemoveLarge = true;
  }
  if (plates.large === 0) {
    disableRemoveLarge = true;
  }

  let disableRemoveSmall = false;
  if (platesPerSide <= MIN_PLATES_PER_SIDE) {
    disableRemoveSmall = true;
  }
  if (plates.small === 0) {
    disableRemoveSmall = true;
  }

  const totalWeight = getTotalWeight(plates);

  return (
    <div className={styles.weightPicker}>
      <div className={styles.weightPicker__rows}>
        <div className={styles.weightPicker__row}>
          <span className={styles.weightPicker__name}>
            Groot · {PLATE_WEIGHTS.large} kg
          </span>
          <button
            type="button"
            className={styles.weightPicker__button}
            onClick={() => removePlate("large")}
            disabled={disableRemoveLarge}
            aria-label="Grote schijf eraf"
          >
            −
          </button>
          <span className={styles.weightPicker__count}>{plates.large}</span>
          <button
            type="button"
            className={styles.weightPicker__button}
            onClick={() => addPlate("large")}
            disabled={disableAdd}
            aria-label="Grote schijf erbij"
          >
            +
          </button>
        </div>

        <div className={styles.weightPicker__row}>
          <span className={styles.weightPicker__name}>
            Klein · {PLATE_WEIGHTS.small} kg
          </span>
          <button
            type="button"
            className={styles.weightPicker__button}
            onClick={() => removePlate("small")}
            disabled={disableRemoveSmall}
            aria-label="Kleine schijf eraf"
          >
            −
          </button>
          <span className={styles.weightPicker__count}>{plates.small}</span>
          <button
            type="button"
            className={styles.weightPicker__button}
            onClick={() => addPlate("small")}
            disabled={disableAdd}
            aria-label="Kleine schijf erbij"
          >
            +
          </button>
        </div>
      </div>

      <p className={styles.weightPicker__total}>
        Totaal <strong>{totalWeight} kg</strong>
      </p>
    </div>
  );
};

export default WeightPicker;
