<script>
import palettes from '../constants/palettes.json'
import { BASE, SHADES } from '../constants/constants'
import Combinations from './components/Combinations.vue'
import Palette from './components/Palette.vue'
import Section from './components/Section.vue'
import Swatch from './components/Swatch.vue'
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
    Swatch,
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
      title="Named"
    >
      <h3>Base</h3>
      <ul class="swatches">
        <li>
          <Swatch
            id="neutral-90"
            name="Base"
            scale="90"
            v-bind:color="$options.palettes.neutral['90'].value"
          />
        </li>
      </ul>
      <h3>Selects</h3>
      <ul class="swatches">
        <li>
          <Swatch
            id="blue-50"
            name="Cobolt"
            scale="50"
            v-bind:color="$options.palettes.blue['50'].value"
          />
        </li>
        <li>
          <Swatch
            id="blue-80"
            name="Navy"
            scale="80"
            v-bind:color="$options.palettes.blue['80'].value"
          />
        </li>
        <li>
          <Swatch
            id="green-30"
            name="Mint"
            scale="30"
            v-bind:color="$options.palettes.green['30'].value"
          />
        </li>
        <li>
          <Swatch
            id="red-10"
            name="Pink"
            scale="10"
            v-bind:color="$options.palettes.red['10'].value"
          />
        </li>
      </ul>
      <h3>Indicators</h3>
      <ul class="swatches">
        <li>
          <Swatch
            id="green-50"
            name="Positive"
            scale="50"
            v-bind:color="$options.palettes.green['50'].value"
          />
        </li>
        <li>
          <Swatch
            id="red-50"
            name="Negative"
            scale="50"
            v-bind:color="$options.palettes.red['50'].value"
          />
        </li>
        <li>
          <Swatch
            id="yellow-50"
            name="Caution"
            scale="50"
            v-bind:color="$options.palettes.yellow['50'].value"
          />
        </li>
        <li>
          <Swatch
            id="purple-50"
            name="Promote"
            scale="50"
            v-bind:color="$options.palettes.purple['50'].value"
          />
        </li>
      </ul>
    </Section>
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
