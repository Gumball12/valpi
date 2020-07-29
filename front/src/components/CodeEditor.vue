<template>
  <v-sheet
    class="render-target"
    width="100%" height="calc(100vh - 62px)" rounded>
    <v-container class="pt-12">
      <codemirror
        ref="codemirror" :options="options"
        v-model="code" @input="updateFormat" />
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/yaml/yaml';

export default Vue.extend({
  components: { codemirror },
  data: () => ({
    code: '',
    options: {
      tabSize: 2,
      mode: 'application/json',
      json: true,
      line: true,
      lineWrapping: true,
      scrollbarStyle: 'null',
      theme: 'blackboard',
    },
  }),
  computed: {
    codemirror(): codemirror {
      return (this.$refs.codemirror as codemirror).codemirror;
    },
    isJson(): boolean {
      return this.code.startsWith('{');
    },
  },
  methods: {
    updateFormat() {
      this.codemirror.setOption('mode', this.isJson ? 'application/json' : 'yaml');
    },
  },
});
</script>

<style lang="scss" scoped>
div.render-target {
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

  ::v-deep div.vue-codemirror {
    height: 93%;

    div.CodeMirror {
      height: 100%;
    }
  }
}
</style>
