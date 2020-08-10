<script>
  import Box from './Box.vue';
  import Combination from './Combination.vue';
  import Contrast from './Contrast.vue';

  export default {
    name: 'Combinations',
    components: {
      Box,
      Combination,
      Contrast,
    },
    props: {
      editColor: {
        type: Function,
        required: true,
      },
      scales: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<template>
  <ul class="combinations">
    <li
      v-for="(scale, name) in scales"
      v-bind:key="name"
    >
      <h3>{{ name.toLowerCase() }}</h3>
      <button
        class="edit-color"
        v-on:click="editColor(name)"
      >
        <Combination
          v-bind:first="scale.light"
          v-bind:second="scale.default"
          v-bind:third="scale.dark"
        />
      </button>
      <h4>Light</h4>
      <Box
        v-bind:background="scale.light"
        v-bind:border="scale.default"
        v-bind:color="scale.dark"
      >
        Contrast
        <Contrast
          v-bind:styled="false"
          v-bind:value="scale.light"
          v-bind:versus="scale.dark"
        />
      </Box>
      <h4>Dark</h4>
      <Box
        v-bind:background="scale.dark"
        v-bind:border="scale.default"
        v-bind:color="scale.light"
      >
        Contrast
        <Contrast
          v-bind:styled="false"
          v-bind:value="scale.light"
          v-bind:versus="scale.dark"
        />
      </Box>
    </li>
  </ul>
</template>
