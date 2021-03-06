// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router'

Vue.config.productionTip = false

const app = new Vue({
    router,
    store,
    ...App
})

app.$mount('#app')