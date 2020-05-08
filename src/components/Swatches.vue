<script>
import Swatch from './Swatch.vue'

export default {
  name: 'Swatches',
  components: {
    Swatch
  },
  props: {
    palettes: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <ul class="swatches">
    <li
      v-for="(palette, name) in palettes" 
      v-bind:key="name"
    >
      <ul>
        <li
          v-for="(color, name) in palette" 
          v-bind:key="name"
        >
          <Swatch
            v-bind:color="color"
          >
            {{ name }}
          </Swatch>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.swatches {
  display: flex;
}

.swatches li {
  flex-basis: 1;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
