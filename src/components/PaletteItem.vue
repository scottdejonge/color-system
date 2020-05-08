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
    color: function () {
      return Color(this.value);
    },
    name: function () {
      return `${this.paletteName}-${this.scale}`;
    },
  }
}
</script>

<template>
  <tr>
    <td>
      <Swatch
        v-bind:color="value"
      />
    </td>
    <td>
      {{ name }}
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
