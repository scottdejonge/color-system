<script>

export default {
  name: 'Combination',
  props: {
    primary: {
      type: String,
      required: true,
    },
    secondary: {
      type: String,
      required: true,
    },
    tertiary: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 128,
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    v-bind:height="size"
    v-bind:width="size"
  >
    <circle
      cx="40"
      cy="88"
      r="40"
      v-bind:fill="primary"
    />
    <circle
      cx="66"
      cy="40"
      r="40"
      v-bind:fill="secondary"
    />
    <circle
      cx="88"
      cy="88"
      r="40"
      v-bind:fill="tertiary"
    />
  </svg>
</template>
