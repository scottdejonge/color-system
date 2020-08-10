<script>
  import Color from 'color';
  import Contrast from './Contrast.vue';
  import Sample from './Sample.vue';
  import Swatch from './Swatch.vue';
  import { SHADES } from '../../constants/constants';

  export default {
    name: 'PaletteItem',
    SHADES,
    components: {
      Contrast,
      Sample,
      Swatch,
    },
    props: {
      paletteName: {
        type: String,
        required: true,
      },
      scale: {
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
  };
</script>

<template>
  <tr>
    <th>
      <Swatch
        v-bind:color="value"
        v-bind:palette-name="paletteName"
        v-bind:scale="scale"
      />
    </th>
    <td>
      <code>
        {{ color.hex() }}
      </code>
    </td>
    <td>
      <code>
        {{ color.hsl() }}
      </code>
    </td>
    <td>
      <code>
        {{ color.rgb() }}
      </code>
    </td>
    <td>
      <Sample
        v-bind:background="$options.SHADES.neutral.dark"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.SHADES.neutral.dark"
      />
    </td>
    <td>
      <Sample
        v-bind:background="$options.SHADES.neutral.light"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.SHADES.neutral.light"
      />
    </td>
  </tr>
</template>
