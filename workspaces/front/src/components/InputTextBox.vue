<template>
  <v-text-field color="dark" outlined
    @input="$emit('input', $event)" :placeholder="placeholder">
    <v-icon slot="append" color="red" v-text="appendIcon" />
  </v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    appendIcon: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.v-input {
  ::v-deep .v-input__slot fieldset {
    border: 3px solid #000;
  }

  ::v-deep input {
    letter-spacing: 0.25em;
  }
}
</style>
