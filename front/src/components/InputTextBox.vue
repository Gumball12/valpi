<template>
  <v-text-field color="dark" outlined @input="$emit('input', $event)">
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
  },
});
</script>

<style lang="scss" scoped>
.v-input {
  ::v-deep .v-input__slot {
    border: 3px solid;
  }
}
</style>
