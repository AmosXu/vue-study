import * as actions from './action';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 0,
    user: [{name: 'test', password: 'test'}]
}


const mutations = {
  addUser(state, payload) {
    state.user.push(payload)
  }
};

export default new Vuex.Store({
  state,
  // getters,
  mutations,
  actions
});