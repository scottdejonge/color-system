<script>
import { store, getScale, getShades } from "../../utils/store";
import SliderInput from "./SliderInput";
import Combination from "./Combination";
import Swatch from "./Swatch";
import { ColorPicker } from "vue-accessible-color-picker";
import { EASINGS } from "../../utils/constants";
export default {
  name: "EditColor",
  store,
  components: { SliderInput, Combination, Swatch, ColorPicker },
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
      easing: EASINGS,
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
    colorPickerChange(e) {
      console.log(e.cssColor); // eslint-disable-line

      this.color.value = "red"; //e.colors.hsl;
    },
    updateColor() {
      console.log(this.colorName, this.color.darkness, { ...this.color }); // eslint-disable-line
      this.$props.onUpdate(this.colorName, this.color);
    },
  },
  computed: {
    editColor() {
      if (!this.colorName) return null;
      return store.palette[this.colorName];
    },
    scale() {
      if (!this.colorName) return null;
      const color = Object.assign(
        {},
        store.palette[this.colorName],
        this.color
      );

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
          <Swatch v-bind:color="item" v-bind:scale-name="colorName" v-bind:scale="i * 10" />
        </li>
      </ul>
    </div>
    <div class="edit-inputs">
      <p class="color-picker">
        <color-picker :color="editColor.value" @color-change="colorPickerChange">
          <copy-button />
        </color-picker>
      </p>

      <div class="edit-inputs--darkness">
        <h3>Lightness</h3>
        <SliderInput v-model="color.lightness" id="lightness" label="Strength" min="0" max="100" />
        <SliderInput
          v-model="color.lightHueAngle"
          id="lightHueAngle"
          label="Hue Angle"
          min="-360"
          max="360"
        />
        <SliderInput
          v-model="color.lightSaturation"
          id="lightSaturation"
          label="Saturation"
          min="0"
          max="100"
        />
        <p style="display: flex;">
          <label for="id" style="flex-grow: 1;">Easing</label>
          <select style="width: 180px;" v-model="color.lightnessEasing">
            <option
              v-for="option in easing"
              v-bind:key="option.name"
              v-bind:value="option.name"
            >{{ option.name }}</option>
          </select>
        </p>
      </div>

      <div class="edit-inputs--darkness">
        <h3>Darkness</h3>
        <SliderInput
          v-model="color.darkness"
          :initialValue="editColor.value"
          id="darkness"
          label="Strength"
          min="0"
          max="100"
        />
        <SliderInput
          v-model="color.darkHueAngle"
          id="darkHueAngle"
          label="Hue Angle"
          min="-360"
          max="360"
        />
        <SliderInput
          v-model="color.darkSaturation"
          id="darkSaturation"
          label="Saturation"
          min="0"
          max="100"
        />
        <p style="display: flex;">
          <label for="id" style="flex-grow: 1;">Easing</label>
          <select style="width: 180px;" v-model="color.darknessEasing">
            <option
              v-for="option in easing"
              v-bind:key="option.name"
              v-bind:value="option.name"
            >{{ option.name }}</option>
          </select>
        </p>
      </div>
    </div>

    <button @click="updateColor">Update</button>
  </div>
</template>
