<script>
import { BASE } from '../../constants/constants'

export default {
  name: 'Swatch',
  props: {
    color: {
      type: String,
      required: true,
    },
    paletteName: {
      type: String,
      required: true,
    },
    scale: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    textColor() {
      return Number(this.scale) >= 50 ? BASE.light : BASE.dark;
    },
    name() {
      return `${this.paletteName}-${this.scale}`;
    },
    style() {
      return `background-color:${this.color}; color:${this.textColor}`
    },
  },
}
</script>

<template>
  <div
    class="swatch"
    v-bind:style="style"
  >
    <code>
      {{ name }}
    </code>
  </div>
</template>
