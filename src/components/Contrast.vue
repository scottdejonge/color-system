<script>
import Color from 'color'
import {
  SHADES,
  WCAG_CONTRAST_RATIO,
} from '../../constants/constants'

export default {
  name: 'Contrast',
  props: {
    value: {
      type: String,
      required: true,
    },
    styled: {
      type: Boolean,
      default: true,
    },
    versus: {
      type: String,
      required: true,
    },
  },
  computed: {
    background() {
      return this.contrast >= WCAG_CONTRAST_RATIO.AA
      ? SHADES.green.light
      : SHADES.red.light;
    },
    color() {
      return this.contrast >= WCAG_CONTRAST_RATIO.AA
      ? SHADES.green.dark
      : SHADES.red.dark;
    },
    contrast() {
      const ratio = Color(this.value).contrast(Color(this.versus));
      return ratio.toFixed(2);
    },
    style() {
      return this.styled  ? `background: ${this.background}; color: ${this.color}` : '';
    },
  },
}
</script>

<template>
  <span
    class="contrast"
    v-bind:style="style"
  >
    {{ contrast }}
  </span>
</template>
