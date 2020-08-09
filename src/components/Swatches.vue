<script>
import Swatch from "./Swatch.vue";

export default {
  name: "Swatches",
  components: {
    Swatch,
  },
  props: {
    palettes: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <ul class="swatches">
    <li v-for="(palette, name) in palettes" v-bind:key="name">
      <h3>{{ name }}</h3>
      <ul>
        <li v-for="(item, i) in palette" v-bind:key="i">
          <Swatch v-bind:color="item" v-bind:palette-name="name" v-bind:scale="i * 10" />
        </li>
      </ul>
    </li>
  </ul>
</template>
