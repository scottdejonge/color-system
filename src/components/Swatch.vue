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
    style() {
      return `background-color:${this.color}`
    },
  },
}
</script>

<template>
  <div class="swatch" v-bind:style="style">
    <slot></slot>
  </div>
</template>
