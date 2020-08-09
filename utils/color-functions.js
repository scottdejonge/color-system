import Color from "color";
import defaultScale from "./default-palette";
import * as easingFunctions from "js-easing-functions";

let DARK_STEPS = 5;
let LIGHT_STEPS = 5;
let PALETTE = defaultScale;

const getColorsList = ({
  steps,
  colorShiftAmount,
  mixColor,
  hueAngle,
  saturation,
  baseColor,
  hueEasing,
  saturationEasing,
  lightnessEasing,
}) => {
  const colorsList = [];

  let step;
  for (step = 0; step < steps; step++) {
    colorsList.push(
      Color(baseColor)
        .rotate(easingFunctions[hueEasing](step + 1, 0, -hueAngle, steps))
        .saturate(
          easingFunctions[saturationEasing](
            step + 1,
            0,
            saturation / 100,
            steps
          )
        )
        .mix(
          Color(mixColor),
          easingFunctions[lightnessEasing](
            step + 1,
            0,
            colorShiftAmount / 100,
            steps
          )
        )
        .string()
    );
  }

  return colorsList;
};

const getScale = (p) => {
  const PALETTES = {};
  for (const [key, palette] of Object.entries(p)) {
    const darkColors = getColorsList({
      steps: DARK_STEPS,
      colorShiftAmount: palette.darkness,
      mixColor: "black",
      hueAngle: palette.darkHueAngle,
      saturation: palette.darkSaturation,
      baseColor: palette.value,
      hueEasing: palette.hueEasing,
      saturationEasing: palette.saturationEasing,
      lightnessEasing: palette.darknessEasing,
    });

    const lightColors = getColorsList({
      steps: LIGHT_STEPS,
      colorShiftAmount: palette.lightness,
      mixColor: "white",
      hueAngle: palette.lightHueAngle,
      saturation: palette.lightSaturation,
      baseColor: palette.value,
      hueEasing: palette.hueEasing,
      saturationEasing: palette.saturationEasing,
      lightnessEasing: palette.lightnessEasing,
    }).reverse();

    PALETTES[key] = [...lightColors, palette.value, ...darkColors];
  }

  return PALETTES;
};

const getShades = (palettes) => {
  // Shades reduces a scale to a light, dark and default value
  const SHADES = {};

  const LIGHT = Math.round(LIGHT_STEPS * 0.2);
  const DEFAULT = LIGHT_STEPS;
  const DARK = LIGHT_STEPS + Math.round(DARK_STEPS * 0.8);

  for (const [key, value] of Object.entries(palettes)) {
    SHADES[key] = {
      light: value[LIGHT],
      default: value[DEFAULT],
      dark: value[DARK],
    };
  }
  return SHADES;
};

const store = {
  _update() {
    this.scales = getScale(this.palette);
    this.shades = getShades(this.scales);
  },
  set palette(palette) {
    PALETTE = palette;
    this._update();
  },
  get palette() {
    return PALETTE;
  },
  get darkSteps() {
    return DARK_STEPS;
  },
  set darkSteps(steps) {
    LIGHT_STEPS = steps;
    this._update();
  },
  get lightSteps() {
    return LIGHT_STEPS;
  },
  set lightSteps(steps) {
    LIGHT_STEPS = steps;
    this._update();
  },
};

export { store };
