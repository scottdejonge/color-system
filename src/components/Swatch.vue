<script>
  import { store } from '../../utils/store';

  export default {
    name: 'Swatch',
    store,
    props: {
      color: {
        type: String,
        required: true,
      },
      scale: {
        type: [Number, String],
        required: true,
      },
      scaleName: {
        type: String,
        required: true,
      },
    },
    computed: {
      name() {
        return `${this.scaleName}-${this.scale}`;
      },
      style() {
        return `background-color:${this.color}; color:${this.textColor}`;
      },
      textColor() {
        return Number(this.scale) >= 50
          ? store.shades.neutral.light
          : store.shades.neutral.dark;
      },
    },
  };
</script>

<template>
  <div
    class="swatch"
    v-bind:style="style"
  >
    <code>{{ name }}</code>
  </div>
</template>
