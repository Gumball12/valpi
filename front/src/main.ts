import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

(async () => {
  const data = await (await fetch('https://api.valpi.cc/test2')).text();
  store.dispatch('init', JSON.parse(data));

  new Vue({
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
})();
