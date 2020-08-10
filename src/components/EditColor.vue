<script>
  import { store, getScale, getShades } from '../../utils/store';
  import Combination from './Combination.vue';
  import SliderInput from './SliderInput.vue';
  import Swatch from './Swatch.vue';

  export default {
    name: 'EditColor',
    store,
    components: {
      Combination,
      SliderInput,
      Swatch,
    },
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
      };
    },
    computed: {
      scale() {
        if (!this.colorName) return null;
        const color = {
          ...store.palette[this.colorName],
          ...this.color,
        };
      console.log({ color }); // eslint-disable-line

        return getScale({
          lightSteps: store.lightSteps,
          darkSteps: store.darkSteps,
          palette: color,
        });
      },
      shades() {
        if (!this.colorName) return null;
        const color = {
          ...store.palette[this.colorName],
          ...this.color,
        };
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
    methods: {
      updateColor() {
        console.log(this.colorName, this.color.darkness, { ...this.color }); // eslint-disable-line
        this.$props.onUpdate(this.colorName, this.color);
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
        <li
          v-for="(item, i) in scale"
          v-bind:key="i"
        >
          <Swatch
            v-bind:color="item"
            v-bind:scale-name="colorName"
            v-bind:scale="i * 10"
          />
        </li>
      </ul>
    </div>
    <div class="edit-inputs">
      <p>
        <input
          v-model="color.value"
          placeholder="color"
          type="color"
        />
      </p>
      <SliderInput
        id="darkness"
        v-model="color.darkness"
        label="Darkness"
        min="0"
        max="100"
      />
      <SliderInput
        id="darkHueAngle"
        v-model="color.darkHueAngle"
        label="Dark Hue Angle"
        min="-360"
        max="360"
      />
      <SliderInput
        id="darkSaturation"
        v-model="color.darkSaturation"
        label="Dark Saturation"
        min="0"
        max="100"
      />
      <p>
        <input
          v-model="color.darknessEasing"
          placeholder="darknessEasing"
        />
      </p>

      <SliderInput
        id="lightness"
        v-model="color.lightness"
        label="Lightness"
        min="0"
        max="100"
      />
      <SliderInput
        id="lightHueAngle"
        v-model="color.lightHueAngle"
        label="Light Hue Angle"
        min="-360"
        max="360"
      />
      <SliderInput
        id="lightSaturation"
        v-model="color.lightSaturation"
        label="Light Saturation"
        min="0"
        max="100"
      />
      <p>
        <input
          v-model="color.lightnessEasing"
          placeholder="lightnessEasing"
        />
      </p>
    </div>

    <button v-on:click="updateColor">
      Update
    </button>
  </div>
</template>
