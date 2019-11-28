<script>
import colors from '../../constants/colors.json'
import Swatch from './Swatch.vue'

export default {
  name: 'Palette',
  colors,
  components: {
    Swatch
  },
  props: {
    palette: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ palette }}</h2>
    <ul v-for="color in $options.colors[palette]" v-bind:key="color.name">
      <Swatch v-bind:color="color" />
    </ul>
  </li>
</template>
