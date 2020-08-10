<script>
  export default {
    name: 'SliderInput',
    inheritAttrs: false,
    props: {
      id: {
        type: String,
        required: true,
      },
      initialValue: {
        default: 0,
        type: Number,
        required: false,
      },
      label: {
        type: String,
        required: true,
      },
      max: {
        type: String,
        required: true,
      },
      min: {
        type: String,
        required: true,
      },
      value: {
        default: '',
        type: String,
        required: false,
      },
    },
    computed: {
      inputListeners() {
        const vm = this;
        // `Object.assign` merges objects together to form a new object
        return {
          // We add all the listeners from the parent
          ...this.$listeners,
          // Then we can add custom listeners or override the
          // behavior of some listeners.
          // This ensures that the component works with v-model
          input(event) {
            vm.$emit('input', event.target.value);
          },
        };
      },
    },
  };
</script>

<template>
  <p>
    <label for="id">
      {{ label }}
    </label>
    <input
      v-bind:id="id"
      step="1"
      type="range"
      v-bind:max="max"
      v-bind:min="min"
      v-bind:value="value"
      v-bind="$attrs"
      v-on="inputListeners"
    />
    <span v-text="value"></span>
  </p>
</template>
