<script>
import Color from 'color'
import Contrast from './Contrast.vue'
import Swatch from './Swatch.vue'
import { BASE_COLORS } from '../../constants/constants'

export default {
  name: 'PaletteItem',
  BASE_COLORS,
  components: {
    Contrast,
    Swatch,
  },
  props: {
    scale: {
      type: String,
      required: true,
    },
    paletteName: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    color() {
      return Color(this.value);
    },
    name() {
      return `${this.paletteName}-${this.scale}`;
    },
  },
}
</script>

<template>
  <tr>
    <th>
      {{ name }}
    </th>
    <td>
      <Swatch
        v-bind:color="value"
      />
    </td>
    <td>
      {{ color.hex() }}
    </td>
    <td>
      {{ color.hsl() }}
    </td>
    <td>
      {{ color.rgb() }}
    </td>
    <td>
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.BASE_COLORS.DARK"
      />
    </td>
    <td>
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.BASE_COLORS.LIGHT"
      />
    </td>
  </tr>
</template>


<style scoped>
td,
th {
  padding: 0.25em;
  text-align: left;
}
</style>