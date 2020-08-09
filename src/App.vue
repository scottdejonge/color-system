<script>
import { SHADES, PALETTES } from "../utils/color-functions";
import Combination from "./components/Combination.vue";
import Combinations from "./components/Combinations.vue";
import Palette from "./components/Palette.vue";
import Swatches from "./components/Swatches.vue";

export default {
  name: "App",
  palettes: PALETTES,
  SHADES,
  components: {
    Combination,
    Combinations,
    Palette,
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
            v-bind:first="$options.SHADES.cyan.default"
            v-bind:second="$options.SHADES.blue.dark"
            v-bind:third="$options.SHADES.yellow.default"
          />
        </li>
      </ul>
    </section>
    <section aria-labelledby="base-colors">
      <h2 id="base-colors">Base Colors</h2>
      <Combinations v-bind:palettes="$options.SHADES" />
    </section>
    <section aria-labelledby="swatches">
      <h2 id="swatches">Swatches</h2>
      <Swatches v-bind:palettes="$options.palettes" />
    </section>
    <section aria-labelledby="palettes">
      <h2 id="palettes">Palettes</h2>
      <Palette
        v-for="(palette, name) in $options.palettes"
        v-bind:key="name"
        v-bind:name="name"
        v-bind:palette="palette"
      />
    </section>
  </main>
</template>
