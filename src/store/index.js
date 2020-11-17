import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    signup:null,
    buffet:null,
  },
  mutations: {
    updateUser(state,{user}){
      Vue.set(state,"user",user);
    },
    signupflow(state,data){
      state.signup = {...state.signup,...data};
    }
  },
  getters:{
    user:(state)=>state.user
  },
  actions: {
  },
  modules: {
  }
})
