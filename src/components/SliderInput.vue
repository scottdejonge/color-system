<script>
export default {
  name: "SliderInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    min: {
      type: String,
      required: true,
    },
    max: {
      type: String,
      required: true,
    },
    initialValue: {
      type: Number,
      required: false,
    },
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
};
</script>

<template>
  <p style="display: flex;">
    <label for="id" style="flex-grow: 1;">{{ label }}</label>
    <input
      style="width: 140px;"
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
      v-bind:id="id"
      type="range"
      v-bind:min="min"
      v-bind:max="max"
      step="1"
    />
    <span v-text="value"></span>
  </p>
</template>
