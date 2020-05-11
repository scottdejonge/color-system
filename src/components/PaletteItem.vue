<script>
import Color from 'color'
import Contrast from './Contrast.vue'
import Sample from './Sample.vue'
import Swatch from './Swatch.vue'
import { BASE_COLORS } from '../../constants/constants'

export default {
  name: 'PaletteItem',
  BASE_COLORS,
  components: {
    Contrast,
    Sample,
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
      <Sample
        v-bind:background="$options.BASE_COLORS.DARK"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.BASE_COLORS.DARK"
      />
    </td>
    <td>
      <Sample
        v-bind:background="$options.BASE_COLORS.LIGHT"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.BASE_COLORS.LIGHT"
      />
    </td>
  </tr>
</template>
