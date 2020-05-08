<script>
import PaletteItem from './PaletteItem.vue'

export default {
  name: 'Palette',
  components: {
    PaletteItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    palette: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <table>
      <thead>
        <tr>
          <th>Swatch</th>
          <th>Name</th>
          <th>Hex</th>
          <th>HSL</th>
          <th>RGB</th>
        </tr>
      </thead>
      <tbody>
        <PaletteItem
          v-for="(value, scale) in palette"
          v-bind:key="scale"
          v-bind:scale="scale"
          v-bind:palette-name="name"
          v-bind:value="value"
        />
      </tbody>
    </table>
  </div>
</template>
