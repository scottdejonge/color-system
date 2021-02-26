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
}
</script>

<template>
  <ul class="compliments">
    <li
      v-for="first in palettes" 
      v-bind:key="first"
    >
      <ul class="compliments">
        <li
          v-for="second in palettes" 
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
