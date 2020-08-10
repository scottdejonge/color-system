import Color from "color";
import * as easingFunctions from "js-easing-functions";
import defaultPalette from "./default-palette";

export const getColorsList = ({
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

export const getScale = ({ darkSteps, lightSteps, palette }) => {
  const darkColors = getColorsList({
    steps: darkSteps,
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
    steps: lightSteps,
    colorShiftAmount: palette.lightness,
    mixColor: "white",
    hueAngle: palette.lightHueAngle,
    saturation: palette.lightSaturation,
    baseColor: palette.value,
    hueEasing: palette.hueEasing,
    saturationEasing: palette.saturationEasing,
    lightnessEasing: palette.lightnessEasing,
  }).reverse();

  return [...lightColors, palette.value, ...darkColors];
};

export const getShades = ({ darkSteps, lightSteps, scale }) => {
  const LIGHT = Math.round(lightSteps * 0.2);
  const DEFAULT = lightSteps;
  const DARK = lightSteps + Math.round(darkSteps * 0.8);
  return {
    light: scale[LIGHT],
    default: scale[DEFAULT],
    dark: scale[DARK],
  };
};

export const store = {
  _getScale() {
    const PALETTES = {};
    for (const [key, palette] of Object.entries(this.palette)) {
      PALETTES[key] = getScale({
        darkSteps: this.darkSteps,
        lightSteps: this.lightSteps,
        palette,
      });
    }
    return PALETTES;
  },
  _getShades() {
    // Shades reduces a scale to a light, dark and default value
    const SHADES = {};

    for (const [key, scale] of Object.entries(this.scales)) {
      SHADES[key] = getShades({
        darkSteps: this.darkSteps,
        lightSteps: this.lightSteps,
        scale,
      });
    }
    return SHADES;
  },
  palette: defaultPalette,
  darkSteps: 5,
  lightSteps: 5,
  get scales() {
    return this._getScale();
  },
  get shades() {
    return this._getShades();
  },
};
