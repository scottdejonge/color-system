import Color from 'color';
import * as easingFunctions from 'js-easing-functions';
import defaultPalette from './default-palette';

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

  steps.forEach((step) => {
    colorsList.push(
      Color(baseColor)
        .rotate(easingFunctions[hueEasing](step + 1, 0, -hueAngle, steps))
        .saturate(
          easingFunctions[saturationEasing](
            step + 1,
            0,
            saturation / 100,
            steps,
          ),
        )
        .mix(
          Color(mixColor),
          easingFunctions[lightnessEasing](
            step + 1,
            0,
            colorShiftAmount / 100,
            steps,
          ),
        )
        .string(),
    );
  });

  return colorsList;
};

export const getColorScale = ({ darkSteps, lightSteps, palette }) => {
  const darkColors = getColorsList({
    steps: darkSteps,
    colorShiftAmount: palette.darkness,
    mixColor: 'black',
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
    mixColor: 'white',
    hueAngle: palette.lightHueAngle,
    saturation: palette.lightSaturation,
    baseColor: palette.value,
    hueEasing: palette.hueEasing,
    saturationEasing: palette.saturationEasing,
    lightnessEasing: palette.lightnessEasing,
  }).reverse();

  return [
    ...lightColors,
    palette.value,
    ...darkColors,
  ];
};

export const getColorShades = ({ darkSteps, lightSteps, scale }) => {
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
  getScale() {
    const PALETTES = {};

    Object.entries(this.palette).map((palette) => {
      const item = {
        darkSteps: this.darkSteps,
        lightSteps: this.lightSteps,
        palette,
      };
      return Object.assign(item, PALETTES);
    });

    return PALETTES;
  },
  getShades() {
    // Shades reduces a scale to a light, dark and default value
    const SHADES = {};

    Object.entries(this.scales).map((scale) => {
      const item = {
        darkSteps: this.darkSteps,
        lightSteps: this.lightSteps,
        scale,
      };
      return Object.assign(item, SHADES);
    });

    return SHADES;
  },
  palette: defaultPalette,
  darkSteps: 5,
  lightSteps: 5,
  get scales() {
    return this.getScale();
  },
  get shades() {
    return this.getShades();
  },
};
