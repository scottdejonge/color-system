import Color from "color";
import defaultPalette from "./default-palette";
import * as easingFunctions from "js-easing-functions";

const darkSteps = 5;
const lightSteps = 5;

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

const PALETTES = {};
for (const [key, palette] of Object.entries(defaultPalette)) {
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

  PALETTES[key] = [...lightColors, palette.value, ...darkColors];
}

// Shades reduces a scale to a light, dark and default value
const SHADES = {};

const LIGHT = Math.round(lightSteps * 0.2);
const DEFAULT = lightSteps;
const DARK = lightSteps + Math.round(darkSteps * 0.8);

for (const [key, value] of Object.entries(PALETTES)) {
  SHADES[key] = {
    light: value[LIGHT],
    default: value[DEFAULT],
    dark: value[DARK],
  };
}

export { SHADES, PALETTES };
