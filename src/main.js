import Vue from "vue";
import App from "./App.vue";

import i18n from './lang'
import ElementUI from 'element-ui'


// element style
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
