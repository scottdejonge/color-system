<script>
import { store } from "../utils/store";
import Combination from "./components/Combination.vue";
import Combinations from "./components/Combinations.vue";
import Scale from "./components/Scale.vue";
import Swatches from "./components/Swatches.vue";
import EditColor from "./components/EditColor.vue";

export default {
  name: "App",
  components: {
    Combination,
    Combinations,
    Scale,
    Swatches,
    EditColor,
  },
  data() {
    return {
      store,
      editingColor: null,
    };
  },
  methods: {
    editColor(color) {
      this.editingColor = color;
    },
    updateStore(key, updates) {
      this.store[key] = Object.assign({}, store[key], updates);
    },
    updatePalette(key, updates) {
      this.store.palette[key] = Object.assign(
        {},
        this.store.palette[key],
        updates
      );
      this.editingColor = undefined;
    },
  },
};
</script>

<template>
  <main>
    <h1>Color System</h1>
    <section aria-labelledby="combinations">
      <h2 id="combinations">Combinations</h2>
      <ul class="combinations">
        <li>
          <Combination
            v-bind:first="store.shades.cyan.default"
            v-bind:second="store.shades.blue.dark"
            v-bind:third="store.shades.yellow.default"
          />
        </li>
      </ul>
    </section>
    <section v-if="editingColor" aria-labelledby="edit-color">
      <h2 id="edit-color">Edit Color</h2>
      <EditColor v-bind:onUpdate="updatePalette" v-bind:colorName="editingColor" />
    </section>
    <section aria-labelledby="base-colors">
      <h2 id="base-colors">Base Colors</h2>
      <Combinations v-bind:scales="store.shades" v-bind:editColor="editColor" />
    </section>
    <section aria-labelledby="swatches">
      <h2 id="swatches">Swatches</h2>
      <Swatches v-bind:scales="store.scales" />
    </section>
    <section aria-labelledby="scales">
      <h2 id="scales">Scales</h2>
      <Scale
        v-for="(scale, name) in store.scales"
        v-bind:key="name"
        v-bind:name="name"
        v-bind:scale="scale"
      />
    </section>
  </main>
</template>
