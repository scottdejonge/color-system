<script>
import { slugify } from '../utils/slugify'

export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    id() {
      return slugify(this.title);
    },
  },
}
</script>

<template>
  <section
    v-bind:aria-labelledby="id"
  >
    <h2
      v-bind:id="id"
    >
      {{ title }}
    </h2>
    <slot></slot>
  </section>
</template>
