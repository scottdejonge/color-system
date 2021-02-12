import palettes from './palettes.json'

export const BASE = {
  light: 'white',
  dark: palettes.neutral['90'].value,
};

export const SHADES = {
  neutral: {
    light: palettes.neutral['20'].value,
    default: palettes.neutral['50'].value,
    dark: palettes.neutral['80'].value,
  },
  cyan: {
    light: palettes.cyan['20'].value,
    default: palettes.cyan['50'].value,
    dark: palettes.cyan['80'].value,
  },
  blue: {
    light: palettes.blue['20'].value,
    default: palettes.blue['50'].value,
    dark: palettes.blue['80'].value,
  },
  green: {
    light: palettes.green['20'].value,
    default: palettes.green['50'].value,
    dark: palettes.green['80'].value,
  },
  yellow: {
    light: palettes.yellow['20'].value,
    default: palettes.yellow['50'].value,
    dark: palettes.yellow['80'].value,
  },
  red: {
    light: palettes.red['20'].value,
    default: palettes.red['50'].value,
    dark: palettes.red['80'].value,
  },
  magenta: {
    light: palettes.magenta['20'].value,
    default: palettes.magenta['50'].value,
    dark: palettes.magenta['80'].value,
  },
  purple: {
    light: palettes.purple['20'].value,
    default: palettes.purple['50'].value,
    dark: palettes.purple['80'].value,
  },
};

export const RATIO = {
  A: 3,
  AA: 4.5,
  AAA: 7,
};
