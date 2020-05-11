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
    <h1>Color System</h1>
    <h2>Swatches</h2>
    <Swatches
      v-bind:palettes="$options.palettes"
    />
    <h2>Palettes</h2>
    <Palette
      v-for="(palette, name) in $options.palettes" 
      v-bind:key="name"
      v-bind:name="name"
      v-bind:palette="palette"
    />
  </main>
</template>
