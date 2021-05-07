<script>
import { BASE } from '../../constants/constants'

export default {
  name: 'Swatch',
  props: {
    color: {
      type: String,
      required: true,
    },
    id: {
      default: '',
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
    paletteName: {
      default: '',
      type: String,
    },
    scale: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    label() {
      return this.id || `${this.paletteName}-${this.scale}`;
    },
    style() {
      return `background-color:${this.color}; color:${this.textColor}`
    },
    textColor() {
      return Number(this.scale) >= 50 ? BASE.light : BASE.dark;
    },
  },
}
</script>

<template>
  <div
    class="swatch"
    v-bind:style="style"
  >
    <h4 v-if="name">{{ name }}</h4>
    <p>{{ label }}</p>
    <p><code>{{ color }}</code></p>
  </div>
</template>
