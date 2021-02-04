<script>
import Color from 'color'
import {
  SHADES,
  RATIO,
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
      if (this.contrast >= RATIO.AAA) {
        return SHADES.green.light;
      } else if (this.contrast >= RATIO.AA) {
        return SHADES.yellow.light;
      } else {
        return SHADES.red.light;
      }
    },
    color() {
      if (this.contrast >= RATIO.AAA) {
        return SHADES.green.dark;
      } else if (this.contrast >= RATIO.AA) {
        return SHADES.yellow.dark;
      } else {
        return SHADES.red.dark;
      }
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
