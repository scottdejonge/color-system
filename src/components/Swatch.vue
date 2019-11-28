<script>
export default {
  name: 'Swatch',
  props: {
    color: {
      type: Object,
      required: true,
    },
  },
  computed: {
    style: function () {
      return `background-color:${this.color.value}`
    }
  }
}
</script>

<template>
  <li class="swatch" v-bind:style="style">
    <span>{{ color.name }}</span><br>
    <code>{{ color.value }}</code>
  </li>
</template>

<style scoped>
.swatch {
  padding: 1em;
}
</style>
