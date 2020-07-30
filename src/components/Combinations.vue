<script>
import Combination from './Combination.vue'

export default {
  name: 'Combinations',
  components: {
    Combination
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
  <ul class="combinations">
    <li
      v-for="(palette, name) in palettes" 
      v-bind:key="name"
    >
      <h3>{{ name.toLowerCase() }}</h3>
      <Combination
        v-bind:first="palette.LIGHT"
        v-bind:second="palette.DEFAULT"
        v-bind:third="palette.DARK"
      />
    </li>
  </ul>
</template>
