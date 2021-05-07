<script>
import palettes from '../constants/palettes.json'
import { BASE, SHADES } from '../constants/constants'
import Combinations from './components/Combinations.vue'
import Palette from './components/Palette.vue'
import Section from './components/Section.vue'
import Swatches from './components/Swatches.vue'

export default {
  name: 'App',
  palettes,
  BASE,
  SHADES,
  components: {
    Combinations,
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
    style() {
      return `color:${BASE.dark}`
    },
  },
}
</script>

<template>
  <main
    v-bind:style="style"
  >
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
  </main>
</template>
