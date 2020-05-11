import palettes from './palettes.json'

export const BASE_COLORS = {
  LIGHT: palettes.neutral['10'].value,
  DEFAULT: palettes.neutral['50'].value,
  DARK: palettes.blue['80'].value,
  BLUE: {
    LIGHT: palettes.blue['10'].value,
    DEFAULT: palettes.blue['50'].value,
    DARK: palettes.blue['80'].value,
  },
  CYAN: {
    LIGHT: palettes.cyan['10'].value,
    DEFAULT: palettes.cyan['50'].value,
    DARK: palettes.cyan['80'].value,
  },
  GREEN: {
    LIGHT: palettes.green['10'].value,
    DEFAULT: palettes.green['50'].value,
    DARK: palettes.green['80'].value,
  },
  NEUTRAL: {
    LIGHT: palettes.neutral['10'].value,
    DEFAULT: palettes.neutral['50'].value,
    DARK: palettes.neutral['80'].value,
  },
  RED: {
    LIGHT: palettes.red['10'].value,
    DEFAULT: palettes.red['50'].value,
    DARK: palettes.red['80'].value,
  },
  YELLOW: {
    LIGHT: palettes.yellow['10'].value,
    DEFAULT: palettes.yellow['50'].value,
    DARK: palettes.yellow['80'].value,
  },
};

export const WCAG_CONTRAST_RATIO = {
  "A": 3,
  "AA": 4.5,
  "AAA": 7,
};