import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);
export default new Router({
  routes: [
	{
		path: '/',
		redirect: {
		  name: 'login'
		}
	},
    {
		path: '/login',
		name: 'login',
		meta: {
		  title: 'login'
		},
		component(resolve) {
		  require (['../components/Login.vue'], resolve);
		}
	},
	{
		path: '/register',
		name: 'register',
		meta: {
		  title: 'register'
		},
		component(resolve) {
		  require (['../components/Register.vue'], resolve);
		}
	},
	{
		path: '/hello',
		name: 'hello',
		meta: {
		  title: 'hello'
		},
		component(resolve) {
		  require (['../components/Hello.vue'], resolve);
		}
	},

  ]
})
