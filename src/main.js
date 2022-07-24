// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";

Vue.config.productionTip = false

Vue.use(elementUi);
Vue.use(VueDPlayer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
