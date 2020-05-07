<script>
import colors from '../constants/colors.json'
import palettes from '../constants/palettes'
import Palette from './components/Palette.vue'
import Swatch from './components/Swatch.vue'

export default {
  name: 'App',
  colors,
  palettes,
  components: {
    Palette,
    Swatch,
  }
}
</script>

<template>
  <main>
    <ul>
      <li
        v-for="palette in $options.palettes" 
        v-bind:key="$options.colors[palette][50].name"
      >
        <Swatch
          v-bind:color="$options.colors[palette][50].value"
        >
          {{ palette }}
        </Swatch>
      </li>
    </ul>
    <Palette
      v-for="palette in $options.palettes" 
      v-bind:key="palette"
      v-bind:colors="$options.colors"
      v-bind:palette="palette"
    />
  </main>
</template>
