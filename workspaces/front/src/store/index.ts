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
      state.originCode = code;
    },
  },
  actions: {
    init(ctx, code: string) {
      ctx.commit('updateCode', code);
      ctx.commit('updateOriginCode', code);
    },
  },
});
