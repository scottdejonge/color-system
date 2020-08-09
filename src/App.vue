<script>
import { store } from "../utils/color-functions";
import Combination from "./components/Combination.vue";
import Combinations from "./components/Combinations.vue";
import Scale from "./components/Scale.vue";
import Swatches from "./components/Swatches.vue";

store._update(); // Initialise Store

export default {
  name: "App",
  store,
  components: {
    Combination,
    Combinations,
    Scale,
    Swatches,
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
            v-bind:first="$options.store.shades.cyan.default"
            v-bind:second="$options.store.shades.blue.dark"
            v-bind:third="$options.store.shades.yellow.default"
          />
        </li>
      </ul>
    </section>
    <section aria-labelledby="base-colors">
      <h2 id="base-colors">Base Colors</h2>
      <Combinations v-bind:scales="$options.store.shades" />
    </section>
    <section aria-labelledby="swatches">
      <h2 id="swatches">Swatches</h2>
      <Swatches v-bind:scales="$options.store.scales" />
    </section>
    <section aria-labelledby="scales">
      <h2 id="scales">Scales</h2>
      <Scale
        v-for="(scale, name) in $options.store.scales"
        v-bind:key="name"
        v-bind:name="name"
        v-bind:scale="scale"
      />
    </section>
  </main>
</template>
