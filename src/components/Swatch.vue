<script>

export default {
  name: 'Swatch',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    style: function () {
      return `background-color:${this.color}`
    }
  }
}
</script>

<template>
  <div class="swatch" v-bind:style="style">
    <slot></slot>
  </div>
</template>

<style scoped>
.swatch {
  padding: 1em;
}
</style>
