<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column align-center">
        <!-- title -->
        <text-button>VALPI</text-button>

        <!-- value -->
        <code-editor />

        <!-- action -->
        <div class="action">
          <input-text-box placeholder="private-key" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import CodeEditor from '@/components/CodeEditor.vue';
import TextButton from '@/components/TextButton.vue';
import InputTextBox from '@/components/InputTextBox.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CodeEditor,
    TextButton,
    InputTextBox,
  },
});
</script>

<style lang="scss">
/* global */

@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);

* {
  font-family: 'Jeju Gothic', sans-serif !important;
}

html {
  overflow-y: hidden !important;
}
</style>

<style lang="scss" scoped>
::v-deep main.v-main {
  background: #333;

  div.container {
    height: 100%;

    // title
    .text-button {
      position: relative;
      span {
        font-size: 32px;
      }
    }

    // action
    div.action {
      position: absolute;
      right: 1em;
      bottom: -1em;
      width: 50%;

      div.v-text-field fieldset {
        background: #fafafa;
      }
    }
  }
}
</style>
