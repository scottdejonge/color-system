<script>
import Box from './Box.vue'
import Combination from './Combination.vue'
import Contrast from './Contrast.vue'

export default {
  name: 'Combinations',
  components: {
    Box,
    Combination,
    Contrast,
  },
  props: {
    palettes: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <ul class="combinations">
    <li
      v-for="(palette, name) in palettes" 
      v-bind:key="name"
    >
      <h3>{{ name.toLowerCase() }}</h3>
      <Combination
        v-bind:first="palette.light"
        v-bind:second="palette.default"
        v-bind:third="palette.dark"
      />
      <h4>Light</h4>
      <Box
        v-bind:background="palette.light"
        v-bind:border="palette.default"
        v-bind:color="palette.dark"
      >
        <Contrast
          v-bind:styled="false"
          v-bind:value="palette.light"
          v-bind:versus="palette.dark"
        />
      </Box>
      <h4>Dark</h4>
      <Box
        v-bind:background="palette.dark"
        v-bind:border="palette.default"
        v-bind:color="palette.light"
      >
        <Contrast
          v-bind:styled="false"
          v-bind:value="palette.light"
          v-bind:versus="palette.dark"
        />
      </Box>
    </li>
  </ul>
</template>
