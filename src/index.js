import Vue from "vue";
import { Button } from 'mint-ui'
import App from "./App.vue";

//全局注册
Vue.component(Button.name,Button)



import "./base.css";

new Vue({
  beforeCreate(){
    // 将当前vm对象作为事件总线对象保存到Vue的原型对象(让所有的组件对象都直接可见)
    Vue.prototype.$eventBus = this;
  },
  components: { //注册组件()后面才能写组件标签
    App: App
  },
  template: `<App/>`
}).$mount('#root')