import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Main from '../components/component/Main'
import Look from "../components/pages/Look";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      redirect : '/Main'
    },
    {
      path: '/Main',
      component: Main
    },
    {
      path : '/Look/:videoCode',
      component : Look,
      //开启props拿参
      props($router){
        return { videoCode: $router.params.videoCode };
      }
    }
  ]
})
