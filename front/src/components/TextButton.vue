<template>
  <span :style="setColor" @click="$emit('click', $event)">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: '#f2f2f2',
    },
  },
  computed: {
    setColor() {
      return {
        color: this.color,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@gumball12/sass-text-stroke/_text-stroke.scss'; // text-stroke procedure

span {
  @include text-stroke(3, #000);

  font-size: 24px;
  letter-spacing: 0.25em;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 3px #000;
  }
}
</style>
