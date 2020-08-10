<script>

export default {
  name: 'Box',
  props: {
    background: {
      type: String,
      required: true,
    },
    border: {
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
      return `
        background-color:${this.background};
        border-color:${this.border};
        color:${this.color};
      `;
    },
  },
}
</script>

<template>
  <div
    class="box"
    v-bind:style="style"
  >
    <slot></slot>
  </div>
</template>
