<script>
export default {
  name: 'Sample',
  props: {
    background: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    style() {
      return `background: ${this.background}; color: ${this.color}`;
    },
  },
}
</script>

<template>
  <span
    class="sample"
    v-bind:style="style"
  >
    Abc
  </span>
</template>
