<script>
import { store, getScale, getShades } from "../../utils/store";
import SliderInput from "./SliderInput";
import Combination from "./Combination";
import Swatch from "./Swatch";

export default {
  name: "EditColor",
  store,
  components: { SliderInput, Combination, Swatch },
  props: {
    colorName: {
      type: String,
      required: true,
    },
    onUpdate: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      color: {},
      // value: "hsl(40, 100%, 55%)",
      // darkness: 45,
      // darkHueAngle: 20,
      // darkSaturation: 120, // Technically I should not go over 100 but having trouble matching the vibrancy. Maybe I should rethink how I apply saturation curves.
      // lightness: 95,
      // lightHueAngle: -5,
      // lightSaturation: 100,
      // hueEasing: "easeOutQuart",
      // saturationEasing: "easeInOutSine",
      // lightnessEasing: "easeInOutSine",
      // darknessEasing: "easeInOutSine",
    };
  },
  methods: {
    updateColor() {
      console.log(this.colorName, this.color.darkness, { ...this.color }); // eslint-disable-line
      this.$props.onUpdate(this.colorName, this.color);
    },
  },
  computed: {
    scale() {
      if (!this.colorName) return null;
      const color = Object.assign(
        {},
        store.palette[this.colorName],
        this.color
      );
      console.log({ color }); // eslint-disable-line

      return getScale({
        lightSteps: store.lightSteps,
        darkSteps: store.darkSteps,
        palette: color,
      });
    },
    shades() {
      if (!this.colorName) return null;
      const color = Object.assign(
        {},
        store.palette[this.colorName],
        this.color
      );
      const scale = getScale({
        lightSteps: store.lightSteps,
        darkSteps: store.darkSteps,
        palette: color,
      });
      return getShades({
        lightSteps: store.lightSteps,
        darkSteps: store.darkSteps,
        scale,
      });
    },
  },
};
</script>

<template>
  <div>
    <div class="edit-sampler">
      <div class="edit-sampler--combination">
        <Combination
          v-bind:first="shades.light"
          v-bind:second="shades.default"
          v-bind:third="shades.dark"
        />
      </div>
      <ul class="edit-scale">
        <li v-for="(item, i) in scale" v-bind:key="i">
          <Swatch
            v-bind:color="item"
            v-bind:scale-name="colorName"
            v-bind:scale="i * 10"
          />
        </li>
      </ul>
    </div>
    <div class="edit-inputs">
      <p><input v-model="color.value" placeholder="color" type="color" /></p>
      <SliderInput
        v-model="color.darkness"
        id="darkness"
        label="Darkness"
        min="0"
        max="100"
      />
      <SliderInput
        v-model="color.darkHueAngle"
        id="darkHueAngle"
        label="Dark Hue Angle"
        min="-360"
        max="360"
      />
      <SliderInput
        v-model="color.darkSaturation"
        id="darkSaturation"
        label="Dark Saturation"
        min="0"
        max="100"
      />
      <p>
        <input v-model="color.darknessEasing" placeholder="darknessEasing" />
      </p>

      <SliderInput
        v-model="color.lightness"
        id="lightness"
        label="Lightness"
        min="0"
        max="100"
      />
      <SliderInput
        v-model="color.lightHueAngle"
        id="lightHueAngle"
        label="Light Hue Angle"
        min="-360"
        max="360"
      />
      <SliderInput
        v-model="color.lightSaturation"
        id="lightSaturation"
        label="Light Saturation"
        min="0"
        max="100"
      />
      <p>
        <input v-model="color.lightnessEasing" placeholder="lightnessEasing" />
      </p>
    </div>

    <button @click="updateColor">Update</button>
  </div>
</template>
