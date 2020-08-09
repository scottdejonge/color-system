<script>
import ScaleItem from "./ScaleItem.vue";

export default {
  name: "Scale",
  components: {
    ScaleItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    scale: {
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
        <ScaleItem
          v-for="(item, i) in scale"
          v-bind:key="i"
          v-bind:scale="i * 10"
          v-bind:scale-name="name"
          v-bind:value="item"
        />
      </tbody>
    </table>
  </section>
</template>
