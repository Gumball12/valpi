import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    originCode: '',
    code: '',
  },
  mutations: {
    updateCode(state, code: string) {
      state.code = code;
    },
    updateOriginCode(state, code: string) {
      console.log('updateOriginCode', code);
      state.originCode = code;
    },
  },
  actions: {
    init(ctx, code) {
      ctx.dispatch('updateCode', code);
      ctx.dispatch('updateOriginCode', code);
    },
    updateCode(ctx, code) {
      if (typeof code === 'object') {
        ctx.commit('updateCode', JSON.stringify(code));
      } else {
        ctx.commit('updateCode', code);
      }
    },
    updateOriginCode(ctx, code) {
      if (typeof code === 'object') {
        ctx.commit('updateOriginCode', JSON.stringify(code));
      } else {
        ctx.commit('updateOriginCode', code);
      }
    },
  },
});
