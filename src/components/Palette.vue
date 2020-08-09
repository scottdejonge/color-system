<script>
import PaletteItem from "./PaletteItem.vue";

export default {
  name: "Palette",
  components: {
    PaletteItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    palette: {
      type: Array,
      required: true,
    },
  },
  computed: {
    headingId() {
      return `section-${this.name.toLowerCase()}`;
    },
  },
};
</script>

<template>
  <section v-bind:aria-labelledby="headingId">
    <h3 v-bind:id="headingId">{{ name }}</h3>
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Hex</th>
          <th>HSL</th>
          <th>RGB</th>
          <th>Contrast Dark</th>
          <th>Contrast Light</th>
        </tr>
      </thead>
      <tbody>
        <PaletteItem
          v-for="(item, i) in palette"
          v-bind:key="i"
          v-bind:scale="i * 10"
          v-bind:palette-name="name"
          v-bind:value="item"
        />
      </tbody>
    </table>
  </section>
</template>
