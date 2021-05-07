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
      default: 48,
    },
  },
  computed: {
    style() {
      return [
        `background: linear-gradient(to left, ${this.first}, ${this.second})`,
        `height: ${this.size}px`,
      ].join('; ');
    },
  },
}
</script>

<template>
  <div
    v-bind:style="style"
  />
</template>
