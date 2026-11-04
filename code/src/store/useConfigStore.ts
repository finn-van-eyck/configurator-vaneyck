import { create } from "zustand";
import { DEFAULT_CONFIG } from "../config/options";
import type { Config, StepId } from "../config/options";

type ConfigState = Config & {
  currentStep: StepId;
};

export const useConfigStore = create<ConfigState>()(() => ({
  ...DEFAULT_CONFIG,
  currentStep: "plates",
}));