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
  <div>
    <h2>{{ palette }}</h2>
    <ul>
      <li v-for="color in $options.colors[palette]" v-bind:key="color.name">
        <Swatch v-bind:item="color" />
      </li>
    </ul>
  </div>
</template>
