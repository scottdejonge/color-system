<script>
import Color from 'color'
import Swatch from './Swatch.vue'

export default {
  name: 'PaletteItem',
  components: {
    Swatch
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
  </tr>
</template>


<style scoped>
td,
th {
  padding: 0.25em;
  text-align: left;
}
</style>