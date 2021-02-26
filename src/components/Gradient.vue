<script>

export default {
  name: 'Gradient',
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
  computed: {
    id() {
      return `${this.first.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '-')}-${this.second.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '-')}`;
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="gradient"
    width="100%"
    v-bind:height="size"
    v-bind:viewBox="`0 0 100% ${size}`"
  >
    <defs>
      <linearGradient
        v-bind:id="id"
      >
        <stop
          offset="0%"
          v-bind:stop-color="first"
        />
        <stop
          offset="100%"
          v-bind:stop-color="second"
        />
      </linearGradient>
    </defs>
    <rect
      x="0"
      y="0"
      width="100%"
      v-bind:fill="`url(#${id})`"
      v-bind:height="size"
    />
  </svg>
</template>
