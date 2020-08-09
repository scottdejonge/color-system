<script>
import Swatch from "./Swatch.vue";

export default {
  name: "Swatches",
  components: {
    Swatch,
  },
  props: {
    scales: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <ul class="swatches">
    <li v-for="(scale, name) in scales" v-bind:key="name">
      <h3>{{ name }}</h3>
      <ul>
        <li v-for="(item, i) in scale" v-bind:key="i">
          <Swatch
            v-bind:color="item"
            v-bind:scale-name="name"
            v-bind:scale="i * 10"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>
