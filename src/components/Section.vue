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
    href() {
      return `#${this.id}`;
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
      <a
        aria-hidden="true"
        class="anchor-link"
        v-bind:href="href"
      >
        #
      </a>
    </h2>
    <slot></slot>
  </section>
</template>
