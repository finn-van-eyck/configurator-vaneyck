export const BASE_PRICE = 144;


//STEPS
export type StepId =
  | "plates"
  | "finish"
  | "weight"
  | "grip"
  | "collar"
  | "rack"
  | "light";

export type Step = {
  id: StepId;
  label: string;
  title: string;
};

export const STEPS: Step[] = [
  { id: "plates", label: "Plates", title: "Shape your base." },
  { id: "finish", label: "Finish", title: "Pick your steel." },
  { id: "weight", label: "Weight", title: "Set the load." },
  { id: "grip", label: "Grip", title: "Find your hold." },
  { id: "collar", label: "Collar", title: "Lock it down." },
  { id: "rack", label: "Rack", title: "Frame the build." },
  { id: "light", label: "Light", title: "Set the signal." },
];

//OPTIONS
//T is een generic, waarde wordt pas gegeven als het type daadwerkelijk gebruikt wordt zosl bijvoorbeeld hieronder bij plateshape
export type Option<T> = {
  id: T;
  label: string;
  price: number;
};


//PLATESHAPE
export type PlateShape = "round" | "hex" | "olympic";

export const PLATE_SHAPES: Option<PlateShape>[] = [
  { id: "round", label: "Round", price: 0 },
  { id: "hex", label: "Hex", price: 0 },
  { id: "olympic", label: "Olympic", price: 8 },
];


//TEXTURES EN MATERIALS OPTIONS
export type FinishType = "iron" | "rubber" | "urethane" | "chrome";

export type TextureSet = "iron" | "rubber" | null;

export type FinishOption = Option<FinishType> & {
  metalness: number;
  roughness: number;
  textureSet: TextureSet;
};

export const FINISHES: FinishOption[] = [
  { id: "iron", label: "Cast iron", price: 0, metalness: 0.6, roughness: 0.75, textureSet: "iron" },
  { id: "rubber", label: "Rubber", price: 6, metalness: 0, roughness: 0.9, textureSet: "rubber" },
  { id: "urethane", label: "Urethane", price: 10, metalness: 0, roughness: 0.45, textureSet: "rubber" },
  { id: "chrome", label: "Chrome", price: 12, metalness: 1, roughness: 0.12, textureSet: null },
];

//COLORS
export type ColorOption = {
  id: string;
  label: string;
  hex: string;
};

export const FINISH_COLORS: ColorOption[] = [
  { id: "graphite", label: "Graphite", hex: "#222729" },
  { id: "silver", label: "Silver", hex: "#D8DBD8" },
  { id: "steel", label: "Steel", hex: "#727A7C" },
  { id: "bronze", label: "Bronze", hex: "#6E5543" },
  { id: "forest", label: "Forest", hex: "#22352E" },
  { id: "midnight", label: "Midnight", hex: "#313142" },
];

export const GRIP_COLORS: ColorOption[] = FINISH_COLORS.filter(
  (color) => color.id !== "midnight",
);
export const RACK_COLORS: ColorOption[] = [
  { id: "matte-black", label: "Matte black", hex: "#101314" },
  { id: "anthracite", label: "Anthracite", hex: "#343A3D" },
  { id: "white", label: "White", hex: "#F5F6F4" },
  { id: "signal-red", label: "Signal red", hex: "#D93030" },
];

export const LED_COLORS: ColorOption[] = [
  { id: "warm-white", label: "Warm white", hex: "#FFF1D6" },
  { id: "ice-blue", label: "Ice blue", hex: "#5CC8FF" },
  { id: "lime", label: "Lime", hex: "#C8FF3D" },
  { id: "red", label: "Red", hex: "#FF2D2D" },
  { id: "purple", label: "Purple", hex: "#A46BFF" },
];

//GRIP,COLLAR,RACK,LED OPTIONS
export type GripType = "knurled" | "ergo";

export const GRIPS: Option<GripType>[] = [
  { id: "knurled", label: "Knurled steel", price: 0 },
  { id: "ergo", label: "Ergonomic rubber", price: 8 },
];

export type CollarType = "screw" | "quick";

export const COLLARS: Option<CollarType>[] = [
  { id: "screw", label: "Screw lock", price: 0 },
  { id: "quick", label: "Quick lock", price: 10 },
];

export type RackType = "none" | "stand";

export const RACKS: Option<RackType>[] = [
  { id: "none", label: "None", price: 0 },
  { id: "stand", label: "Display stand", price: 20 },
];

export type LedMode = "off" | "on";

export const LED_MODES: Option<LedMode>[] = [
  { id: "off", label: "Off", price: 0 },
  { id: "on", label: "On", price: 10 },
];

export type LedEffect = "static" | "pulse";

export const LED_EFFECTS: Option<LedEffect>[] = [
  { id: "static", label: "Static", price: 0 },
  { id: "pulse", label: "Pulse", price: 0 },
];

//WEIGHT
export type PlateSize = "large" | "small";

export type PlateStack = {
  large: number;
  small: number;
};

export const PLATE_WEIGHTS: PlateStack = {
  large: 2.5,
  small: 1.25,
};

export const PLATE_PRICES: PlateStack = {
  large: 6,
  small: 4,
};

export const BAR_WEIGHT = 2.5;
export const MIN_PLATES_PER_SIDE = 1;
export const MAX_PLATES_PER_SIDE = 4;

export const WEIGHT_PRESETS: PlateStack[] = [
  { large: 0, small: 1 },
  { large: 1, small: 0 },
  { large: 1, small: 1 },
  { large: 2, small: 1 },
  { large: 3, small: 1 },
];

//STARTCONFIGURATIE
export type Config = {
  plateShape: PlateShape;
  finish: FinishType;
  finishColor: string;
  plates: PlateStack;
  grip: GripType;
  gripColor: string;
  collar: CollarType;
  rack: RackType;
  rackColor: string;
  ledMode: LedMode;
  ledColor: string;
  ledEffect: LedEffect;
};

export const DEFAULT_CONFIG: Config = {
  plateShape: "round",
  finish: "iron",
  finishColor: "graphite",
  plates: { large: 2, small: 1 },
  grip: "knurled",
  gripColor: "graphite",
  collar: "quick",
  rack: "stand",
  rackColor: "matte-black",
  ledMode: "on",
  ledColor: "lime",
  ledEffect: "static",
};

//HELPERS
//zoekt de hexcode van een kleur in een kleurenlijst
export const findHex = (colors: ColorOption[], id: string) => {
  const color = colors.find((item) => item.id === id);

  if (color) {
    return color.hex;
  }
  return "#ffffff";
};

//zoekt alle gegevens van een afwerking (metalness, roughness, ...)
export const findFinish = (id: FinishType) => {
  const finish = FINISHES.find((item) => item.id === id);

  if (finish) {
    return finish;
  }
  return FINISHES[0];
};