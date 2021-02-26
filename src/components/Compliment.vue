<script>

export default {
  name: 'Compliment',
  props: {
    first: {
      type: String,
      required: true,
    },
    second: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 64,
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="combination"
    v-bind:height="size"
    v-bind:width="size"
    v-bind:viewBox="`0 0 ${size} ${size}`"
  >
    <clipPath id="cut-off">
      <rect
        x="0"
        y="0"
        v-bind:height="size"
        v-bind:width="size / 2"
      />
    </clipPath>
    <circle
      v-bind:cx="size / 2"
      v-bind:cy="size / 2"
      v-bind:r="size / 2"
      v-bind:fill="first"
    />
    <circle
      clip-path="url(#cut-off)"
      v-bind:cx="size / 2"
      v-bind:cy="size / 2"
      v-bind:r="size / 2"
      v-bind:fill="second"
    />
  </svg>
</template>
