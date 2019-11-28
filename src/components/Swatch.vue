<script>
import Color from 'color'

export default {
  name: 'Swatch',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    color: function () {
      return Color(this.item.value)
    },
    style: function () {
      return `background-color:${this.item.value}`
    }
  }
}
</script>

<template>
  <div class="swatch" v-bind:style="style">
    <h3>{{ item.name }}</h3>
    <pre>{{ item.value }}</pre><br>
    <pre>{{ color.rgb() }}</pre><br>
    <pre>{{ color.hex() }}</pre>
  </div>
</template>

<style scoped>
.swatch {
  padding: 1em;
}
h3 {
  margin: 0 0 0.5em 0;
  font-size: 1em;
}
pre {
  display: inline-block;
  margin: 0.25em 0;
  padding: 0.25em 0.5em;
  background-color: white;
  border-radius: 0.25em;
}
</style>
