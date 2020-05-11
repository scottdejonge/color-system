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
      <h2>{{ name }}</h2>
      <ul>
        <li
          v-for="(item, name) in palette" 
          v-bind:key="name"
        >
          <Swatch
            v-bind:color="item.value"
          >
            {{ name }}
          </Swatch>
        </li>
      </ul>
    </li>
  </ul>
</template>
