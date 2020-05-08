<script>
import palettes from '../constants/palettes.json'
import Palette from './components/Palette.vue'
import Swatches from './components/Swatches.vue'

export default {
  name: 'App',
  palettes,
  components: {
    Palette,
    Swatches,
  },
}
</script>

<template>
  <main>
    <Swatches
      v-bind:palettes="$options.palettes"
    />
    <Palette
      v-for="(palette, name) in $options.palettes" 
      v-bind:key="name"
      v-bind:name="name"
      v-bind:palette="palette"
    />
  </main>
</template>
