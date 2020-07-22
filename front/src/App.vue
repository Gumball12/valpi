<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column align-center">
        <!-- title -->
        <text-button>VALPI</text-button>

        <!-- value -->
        <v-sheet
          class="render-target"
          width="100%" height="calc(100vh - 62px)" rounded>
          <v-container class="pt-12">
            <router-view />
          </v-container>
        </v-sheet>

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

import TextButton from '@/components/TextButton.vue';
import InputTextBox from '@/components/InputTextBox.vue';

export default Vue.extend({
  name: 'App',

  components: {
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

    // value
    .render-target {
      margin-top: -24px;

      box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
      background: rgba(11, 11, 13, 0.7);
      color: white;

      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 3px;
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(248, 247, 251, 0.4);
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
