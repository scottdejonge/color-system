<script>
import palettes from '../constants/palettes.json'
import { SHADES } from '../constants/constants'
import Combination from './components/Combination.vue'
import Combinations from './components/Combinations.vue'
import Palette from './components/Palette.vue'
import Swatches from './components/Swatches.vue'

export default {
  name: 'App',
  palettes,
  SHADES,
  components: {
    Combination,
    Combinations,
    Palette,
    Swatches,
  },
}
</script>

<template>
  <main>
    <h1>Color System</h1>
    <h2>Combinations</h2>
    <ul class="combinations">
      <li>
        <Combination
          v-bind:primary="$options.SHADES.CYAN.DEFAULT"
          v-bind:secondary="$options.SHADES.BLUE.DARK"
          v-bind:tertiary="$options.SHADES.YELLOW.DEFAULT"
        />
      </li>
    </ul>
    <h2>Base Colors</h2>
    <Combinations
      v-bind:palettes="$options.SHADES"
    />
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
