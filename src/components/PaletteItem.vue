<script>
import Color from 'color'
import Swatch from './Swatch.vue'

export default {
  name: 'PaletteItem',
  components: {
    Swatch
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    color: function () {
      return Color(this.item.value);
    },
  }
}
</script>

<template>
  <tr>
    <td>
      <Swatch
        v-bind:color="item.value"
      />
    </td>
    <td>
      {{ item.name }}
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
