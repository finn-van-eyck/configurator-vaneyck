import { useState } from "react";
import {
  BASE_PRICE,
  COLLARS,
  FINISHES,
  GRIPS,
  LED_MODES,
  PLATE_PRICES,
  PLATE_SHAPES,
  RACKS,
  findLabel,
  findPrice,
} from "../../../config/options";
import { useTotals } from "../../../hooks/useTotals";
import { useConfigStore } from "../../../store/useConfigStore";
import styles from "./TotalPrice.module.css";

const TotalPrice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { price, weight } = useTotals();

  const plateShape = useConfigStore((state) => state.plateShape);
  const finish = useConfigStore((state) => state.finish);
  const plates = useConfigStore((state) => state.plates);
  const grip = useConfigStore((state) => state.grip);
  const collar = useConfigStore((state) => state.collar);
  const rack = useConfigStore((state) => state.rack);
  const ledMode = useConfigStore((state) => state.ledMode);

  const platesPrice =
    (plates.large * PLATE_PRICES.large + plates.small * PLATE_PRICES.small) * 2;

  let lightText = "Geen";
  let lightPrice = 0;
  if (rack === "stand") {
    lightText = findLabel(LED_MODES, ledMode);
    lightPrice = findPrice(LED_MODES, ledMode);
  }

  const rows = [
    { label: "Basis", value: "Halter", price: BASE_PRICE },
    {
      label: "Schijven",
      value: findLabel(PLATE_SHAPES, plateShape),
      price: findPrice(PLATE_SHAPES, plateShape),
    },
    {
      label: "Afwerking",
      value: findLabel(FINISHES, finish),
      price: findPrice(FINISHES, finish),
    },
    {
      label: "Gewicht",
      value: plates.large + " groot + " + plates.small + " klein",
      price: platesPrice,
    },
    {
      label: "Grip",
      value: findLabel(GRIPS, grip),
      price: findPrice(GRIPS, grip),
    },
    {
      label: "Sluiting",
      value: findLabel(COLLARS, collar),
      price: findPrice(COLLARS, collar),
    },
    {
      label: "Rack",
      value: findLabel(RACKS, rack),
      price: findPrice(RACKS, rack),
    },
    { label: "Licht", value: lightText, price: lightPrice },
  ];

  let buttonText = "Overzicht";
  if (isOpen) {
    buttonText = "Sluiten";
  }

  return (
    <div className={styles.totalPrice}>
      {isOpen && (
        <ul className={styles.totalPrice__list}>
          {rows.map((row) => (
            <li key={row.label} className={styles.totalPrice__row}>
              <span>{row.label}</span>
              <strong className={styles.totalPrice__value}>{row.value}</strong>
              <span className={styles.totalPrice__price}>€{row.price}</span>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.totalPrice__bar}>
        <p className={styles.totalPrice__text}>
          Totaal <strong>€{price}</strong>
          <span className={styles.totalPrice__divider} />
          {weight} kg
        </p>
        <button
          type="button"
          className={styles.totalPrice__button}
          onClick={() => setIsOpen(!isOpen)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
