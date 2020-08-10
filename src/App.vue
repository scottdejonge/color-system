<script>
  import { store } from '../utils/store';
  import Combination from './components/Combination.vue';
  import Combinations from './components/Combinations.vue';
  import EditColor from './components/EditColor.vue';
  import Scale from './components/Scale.vue';
  import Swatches from './components/Swatches.vue';

  export default {
    name: 'App',
    components: {
      Combination,
      Combinations,
      EditColor,
      Scale,
      Swatches,
    },
    data() {
      return {
        editingColor: null,
        store,
      };
    },
    methods: {
      editColor(color) {
        this.editingColor = color;
      },
      updateStore(key, updates) {
        this.store[key] = {
          ...store[key],
          ...updates,
        };
      },
      updatePalette(key, updates) {
        this.store.palette[key] = {
          ...this.store.palette[key],
          ...updates,
        };
        this.editingColor = undefined;
      },
    },
  };
</script>

<template>
  <main>
    <h1>Color System</h1>
    <section aria-labelledby="combinations">
      <h2 id="combinations">
        Combinations
      </h2>
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
    <section aria-labelledby="base-colors">
      <h2 id="base-colors">
        Base Colors
      </h2>
      <EditColor
        v-if="editingColor"
        v-bind:on-update="updatePalette"
        v-bind:color-name="editingColor"
      />
      <Combinations
        v-bind:scales="store.shades"
        v-bind:edit-color="editColor"
      />
    </section>
    <section aria-labelledby="swatches">
      <h2 id="swatches">
        Swatches
      </h2>
      <Swatches v-bind:scales="store.scales" />
    </section>
    <section aria-labelledby="scales">
      <h2 id="scales">
        Scales
      </h2>
      <Scale
        v-for="(scale, name) in store.scales"
        v-bind:key="name"
        v-bind:name="name"
        v-bind:scale="scale"
      />
    </section>
  </main>
</template>
