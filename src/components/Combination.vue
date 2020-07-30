<script>

export default {
  name: 'Combination',
  props: {
    first: {
      type: String,
      required: true,
    },
    second: {
      type: String,
      required: true,
    },
    third: {
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
    class="combination"
    v-bind:height="size"
    v-bind:width="size"
  >
    <circle
      cx="40"
      cy="88"
      r="40"
      v-bind:fill="first"
    />
    <circle
      cx="66"
      cy="40"
      r="40"
      v-bind:fill="second"
    />
    <circle
      cx="88"
      cy="88"
      r="40"
      v-bind:fill="third"
    />
  </svg>
</template>
