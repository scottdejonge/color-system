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
    v-bind:style="style"
  >
    Abc
  </span>
</template>


<style scoped>
span {
  border-radius: 0.25em;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  margin-right: 0.5em;
  padding: 0.25em 0.5em;
}
</style>