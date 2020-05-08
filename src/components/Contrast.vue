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
      if (this.contrast >= WCAG_CONTRAST_RATIO.AA) {
        return BASE_COLORS.GREEN;
      } else {
        return BASE_COLORS.RED;
      }
    },
    color() {
      return Color(this.value);
    },
    contrast() {
      const ratio = this.color.contrast(Color(this.versus));
      return ratio.toFixed(2);
    },
    style() {
      return `background: ${this.background}; color: ${this.versus}`;
    },
  },
}
</script>

<template>
  <mark
    v-bind:style="style"
  >
    {{ contrast }}
  </mark>
</template>


<style scoped>
mark {
  display: inline-block;
  padding: 0.25em;
  border-radius: 0.125em;
}
</style>