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
  computed: {
    reducesPalettes() {
      return Object.keys(this.palettes).reduce((acc, color)=>{
        acc[color] = this.palettes[color]['50']['value']
        return acc;
      },{});
    },
  },
}
</script>

<template>
  <ul class="gradients">
    <li
      v-for="first in reducesPalettes" 
      v-bind:key="first"
    >
      <ul class="gradients">
        <li
          v-for="second in reducesPalettes" 
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
