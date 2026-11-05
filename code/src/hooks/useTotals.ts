import { useConfigStore } from "../store/useConfigStore";
import {
  BASE_PRICE,
  COLLARS,
  FINISHES,
  GRIPS,
  LED_MODES,
  PLATE_PRICES,
  PLATE_SHAPES,
  RACKS,
  findPrice,
  getTotalWeight,
} from "../config/options";

export const useTotals = () => {
  const plateShape = useConfigStore((state) => state.plateShape);
  const finish = useConfigStore((state) => state.finish);
  const plates = useConfigStore((state) => state.plates);
  const grip = useConfigStore((state) => state.grip);
  const collar = useConfigStore((state) => state.collar);
  const rack = useConfigStore((state) => state.rack);
  const ledMode = useConfigStore((state) => state.ledMode);

  let price = BASE_PRICE;
  price += findPrice(PLATE_SHAPES, plateShape);
  price += findPrice(FINISHES, finish);
  price += findPrice(GRIPS, grip);
  price += findPrice(COLLARS, collar);
  price += findPrice(RACKS, rack);

  //de led kan enkel aan als er een rack is
  if (rack === "stand") {
    price += findPrice(LED_MODES, ledMode);
  }

  const platesPricePerSide = plates.large * PLATE_PRICES.large + plates.small * PLATE_PRICES.small;
  price += platesPricePerSide * 2;

  const weight = getTotalWeight(plates);

  return { price, weight };
};