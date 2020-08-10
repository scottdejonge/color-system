<script>
import Color from "color";
import Contrast from "./Contrast.vue";
import Sample from "./Sample.vue";
import Swatch from "./Swatch.vue";
import { store } from "../../utils/store";

export default {
  name: "ScaleItem",
  store,
  components: {
    Contrast,
    Sample,
    Swatch,
  },
  props: {
    scale: {
      type: Number,
      required: true,
    },
    scaleName: {
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
      return `${this.scaleName}-${this.scale}`;
    },
  },
};
</script>

<template>
  <tr>
    <th>
      <Swatch
        v-bind:color="value"
        v-bind:scale-name="scaleName"
        v-bind:scale="scale"
      />
    </th>
    <td>
      <code>{{ color.hex() }}</code>
    </td>
    <td>
      <code>{{ color.hsl().round().string() }}</code>
    </td>
    <td>
      <code>{{ color.rgb().round().string() }}</code>
    </td>
    <td>
      <Sample
        v-bind:background="$options.store.shades.neutral.dark"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.store.shades.neutral.dark"
      />
    </td>
    <td>
      <Sample
        v-bind:background="$options.store.shades.neutral.light"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        v-bind:versus="$options.store.shades.neutral.light"
      />
    </td>
  </tr>
</template>
