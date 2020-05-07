<script>
import PaletteItem from './PaletteItem.vue'

export default {
  name: 'Palette',
  components: {
    PaletteItem,
  },
  props: {
    colors: {
      type: Object,
      required: true,
    },
    palette: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <h2>{{ palette }}</h2>
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
          v-for="item in colors[palette]"
          v-bind:key="item.name"
          v-bind:item="item"
        />
      </tbody>
    </table>
  </div>
</template>
