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
  <li class="swatch" v-bind:style="style">
    {{ color }}
  </li>
</template>

<style scoped>
.swatch {
  padding: 1em;
}
</style>
