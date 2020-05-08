import palettes from './palettes.json'

export const BASE_COLORS = {
  BLUE: palettes.blue['50'].value,
  DARK: palettes.blue['80'].value,
  GREEN: palettes.green['50'].value,
  LIGHT: palettes.neutral['0'].value,
  NEUTRAL: palettes.neutral['50'].value,
  ORANGE: palettes.orange['50'].value,
  RED: palettes.red['50'].value,
  TURQUOISE: palettes.turquoise['50'].value,
  YELLOW: palettes.yellow['50'].value,
};

export const WCAG_CONTRAST_RATIO = {
  "A": 3,
  "AA": 4.5,
  "AAA": 7,
};