<script>
import Compliment from './Compliment.vue'

export default {
  name: 'Compliments',
  components: {
    Compliment,
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
  <ul class="compliments">
    <li
      v-for="first in reducesPalettes" 
      v-bind:key="first"
    >
      <ul class="compliments">
        <li
          v-for="second in reducesPalettes" 
          v-bind:key="second"
        >
          <Compliment
            v-bind:first="first"
            v-bind:second="second"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>
