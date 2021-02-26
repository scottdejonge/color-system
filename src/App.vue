<script>
import palettes from '../constants/palettes.json'
import { SHADES } from '../constants/constants'
import Combinations from './components/Combinations.vue'
import Compliments from './components/Compliments.vue'
import Gradients from './components/Gradients.vue'
import Palette from './components/Palette.vue'
import Section from './components/Section.vue'
import Swatches from './components/Swatches.vue'

export default {
  name: 'App',
  palettes,
  SHADES,
  components: {
    Combinations,
    Compliments,
    Gradients,
    Palette,
    Section,
    Swatches,
  },
  computed: {
    reducedPalettes() {
      return Object.keys(palettes).reduce((acc, color)=>{
        acc[color] = palettes[color]['50']['value']
        return acc;
      },{});
    },
  },
}
</script>

<template>
  <main>
    <h1>Color System</h1>
    <Section
      title="Base Colors"
    >
      <Combinations
        v-bind:palettes="$options.SHADES"
      />
    </Section>
    <Section
      title="Swatches"
    >
      <Swatches
        v-bind:palettes="$options.palettes"
      />
    </Section>
    <Section
      title="Palettes"
    >
      <Palette
        v-for="(palette, name) in $options.palettes" 
        v-bind:key="name"
        v-bind:name="name"
        v-bind:palette="palette"
      />
    </Section>
    <Section
      title="Compliments"
    >
      <Compliments
        v-bind:palettes="reducedPalettes"
      />
    </Section>
    <Section
      title="Gradients"
    >
      <Gradients
        v-bind:palettes="reducedPalettes"
      />
    </Section>
  </main>
</template>
