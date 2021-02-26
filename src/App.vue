<script>
import palettes from '../constants/palettes.json'
import { SHADES } from '../constants/constants'
import Combinations from './components/Combinations.vue'
import Compliments from './components/Compliments.vue'
import Palette from './components/Palette.vue'
import Swatches from './components/Swatches.vue'

export default {
  name: 'App',
  palettes,
  SHADES,
  components: {
    Combinations,
    Compliments,
    Palette,
    Swatches,
  },
}
</script>

<template>
  <main>
    <h1>Color System</h1>
    <section
      aria-labelledby="base-colors"
    >
      <h2
        id="base-colors"
      >
        Base Colors
      </h2>
      <Combinations
        v-bind:palettes="$options.SHADES"
      />
    </section>
    <section
      aria-labelledby="swatches"
    >
      <h2
        id="swatches"
      >
        Swatches
      </h2>
      <Swatches
        v-bind:palettes="$options.palettes"
      />
    </section>
    <section
      aria-labelledby="palettes"
    >
      <h2
        id="palettes"
      >
        Palettes
      </h2>
      <Palette
        v-for="(palette, name) in $options.palettes" 
        v-bind:key="name"
        v-bind:name="name"
        v-bind:palette="palette"
      />
    </section>
    <section
      aria-labelledby="compliments"
    >
      <h2
        id="compliments"
      >
        Compliments
      </h2>
      <Compliments
        v-bind:palettes="$options.palettes"
      />
    </section>
  </main>
</template>
