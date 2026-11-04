import { useConfigStore } from "../store/useConfigStore";
import {
  BAR_WEIGHT,
  BASE_PRICE,
  COLLARS,
  FINISHES,
  GRIPS,
  LED_MODES,
  PLATE_SHAPES,
  PLATE_WEIGHTS,
  PLATE_PRICES,
  RACKS,
} from "../config/options";
import type { Option } from "../config/options";

//zoekt de optie met deze id in de lijst en geeft de prijs terug
const findPrice = (options: Option<string>[], id: string) => {
  const option = options.find((item) => item.id === id);

  if (option) {
    return option.price;
  }
  //anders geeft die undefined en kan er geen prijs berekend worden
  return 0;
};

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
  const platesPerSide = plates.large * PLATE_WEIGHTS.large + plates.small * PLATE_WEIGHTS.small;
  const weight = BAR_WEIGHT + platesPerSide * 2;

  return { price, weight };
};