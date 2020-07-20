<template>
  <v-app>
    <v-main>
      <h1>text-button</h1>
      <text-button @click="onClick">text button</text-button>
      <text-button color="#ff00ff">text button 2</text-button>

      <v-divider class="my-5" />

      <h1>input-text-box</h1>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import TextButton from '@/components/TextButton.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TextButton,
  },

  methods: {
    onClick() {
      console.log('clicked');
    },
  },

  data: () => ({
    //
  }),
});
</script>
