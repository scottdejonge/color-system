<script>
import Color from 'color'
import {
  BASE_COLORS,
  WCAG_CONTRAST_RATIO,
} from '../../constants/constants'

export default {
  name: 'Contrast',
  props: {
    value: {
      type: String,
      required: true,
    },
    versus: {
      type: String,
      required: true,
    },
  },
  computed: {
    background() {
      return this.contrast >= WCAG_CONTRAST_RATIO.AA
      ? BASE_COLORS.GREEN.LIGHT
      : BASE_COLORS.RED.LIGHT;
    },
    color() {
      return this.contrast >= WCAG_CONTRAST_RATIO.AA
      ? BASE_COLORS.GREEN.DARK
      : BASE_COLORS.RED.DARK;
    },
    contrast() {
      const ratio = Color(this.value).contrast(Color(this.versus));
      return ratio.toFixed(2);
    },
    style() {
      return `background: ${this.background}; color: ${this.color}`;
    },
  },
}
</script>

<template>
  <span
    v-bind:style="style"
  >
    {{ contrast }}
  </span>
</template>


<style scoped>
span {
  border-radius: 0.25em;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.25em 0.5em;
}
</style>