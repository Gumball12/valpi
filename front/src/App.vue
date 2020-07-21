<template>
  <v-app>
    <v-main>
      <h1>text-button</h1>
      <text-button @click="onClick">text button</text-button>
      <text-button color="#ff00ff">text button 2</text-button>

      <v-divider class="my-5" />

      <h1>input-text-box</h1>
      <input-text-box append-icon="mdi-close" v-model="inputTextBoxValue" />
      <p><span>value: </span>{{ inputTextBoxValue }}</p>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import TextButton from '@/components/TextButton.vue';
import InputTextBox from '@/components/InputTextBox.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    inputTextBoxValue: '',
  }),

  components: {
    TextButton,
    InputTextBox,
  },

  methods: {
    onClick() {
      console.log('clicked');
    },
  },
});
</script>
