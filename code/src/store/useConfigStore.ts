import { create } from "zustand";
import { DEFAULT_CONFIG, MAX_PLATES_PER_SIDE, MIN_PLATES_PER_SIDE } from "../config/options";
import type {
  CollarType,
  Config,
  FinishType,
  GripType,
  LedEffect,
  LedMode,
  PlateShape,
  PlateSize,
  PlateStack,
  RackType,
  StepId,
} from "../config/options";

type ConfigState = Config & {
  currentStep: StepId;
  setCurrentStep: (step: StepId) => void;

  setPlateShape: (plateShape: PlateShape) => void;
  setFinish: (finish: FinishType) => void;
  setFinishColor: (finishColor: string) => void;
  setPlates: (plates: PlateStack) => void;
  addPlate: (size: PlateSize) => void;
  removePlate: (size: PlateSize) => void;
  setGrip: (grip: GripType) => void;
  setGripColor: (gripColor: string) => void;
  setCollar: (collar: CollarType) => void;
  setRack: (rack: RackType) => void;
  setRackColor: (rackColor: string) => void;
  setLedMode: (ledMode: LedMode) => void;
  setLedColor: (ledColor: string) => void;
  setLedEffect: (ledEffect: LedEffect) => void;

  reset: () => void;
};

export const useConfigStore = create<ConfigState>()((set) => ({
  ...DEFAULT_CONFIG,
  currentStep: "plates",
  setCurrentStep: (step) => set({ currentStep: step }),

  setPlateShape: (plateShape) => set({ plateShape }),
  setFinish: (finish) => set({ finish }),
  setFinishColor: (finishColor) => set({ finishColor }),
  setPlates: (plates) => set({ plates }),

  addPlate: (size) =>
    set((state) => {
      const total = state.plates.large + state.plates.small;

      if (total >= MAX_PLATES_PER_SIDE) {
        return state;
      }
      if (size === "large") {
        return { plates: { ...state.plates, large: state.plates.large + 1 } };
      }
      return { plates: { ...state.plates, small: state.plates.small + 1 } };
    }),

  removePlate: (size) =>
    set((state) => {
      const total = state.plates.large + state.plates.small;

      if (total <= MIN_PLATES_PER_SIDE) {
        return state;
      }
      if (size === "large" && state.plates.large > 0) {
        return { plates: { ...state.plates, large: state.plates.large - 1 } };
      }
      if (size === "small" && state.plates.small > 0) {
        return { plates: { ...state.plates, small: state.plates.small - 1 } };
      }
      return state;
    }),

  setGrip: (grip) => set({ grip }),
  setGripColor: (gripColor) => set({ gripColor }),
  setCollar: (collar) => set({ collar }),
  setRack: (rack) => set({ rack }),
  setRackColor: (rackColor) => set({ rackColor }),
  setLedMode: (ledMode) => set({ ledMode }),
  setLedColor: (ledColor) => set({ ledColor }),
  setLedEffect: (ledEffect) => set({ ledEffect }),

  reset: () => set({ ...DEFAULT_CONFIG, currentStep: "plates" }),
}));