<script>
import Gradient from './Gradient.vue'

export default {
  name: 'Gradients',
  components: {
    Gradient,
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
  <ul class="gradients">
    <li
      v-for="first in palettes" 
      v-bind:key="first"
    >
      <ul class="gradients">
        <li
          v-for="second in palettes" 
          v-bind:key="second"
        >
          <Gradient
            v-bind:first="first"
            v-bind:second="second"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>
