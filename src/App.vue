<script>
import palettes from '../constants/palettes'
import Palette from './components/Palette.vue'

export default {
  name: 'App',
  palettes,
  components: {
    Palette
  }
}
</script>

<template>
  <ul>
    <li v-for="palette in $options.palettes" v-bind:key="palette">
      <Palette v-bind:palette="palette" />
    </li>
  </ul>
</template>
