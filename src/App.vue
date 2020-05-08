<script>
import palettes from '../constants/palettes.json'
import Palette from './components/Palette.vue'
import Swatch from './components/Swatch.vue'

export default {
  name: 'App',
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
        v-for="(palette, name) in $options.palettes" 
        v-bind:key="name"
      >
        <Swatch
          v-bind:color="palette[50]"
        >
          {{ name }}
        </Swatch>
      </li>
    </ul>
    <Palette
      v-for="(palette, name) in $options.palettes" 
      v-bind:key="name"
      v-bind:name="name"
      v-bind:palette="palette"
    />
  </main>
</template>
