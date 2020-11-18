import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    signup:null,
    token:null,
  },
  mutations: {
    updateUser(state,{user}){
      Vue.set(state,"user",user);
    },
    signupflow(state,data){
      state.signup = {...state.signup,...data}
    },
    tokenChange(state,data){
      state.taken= {...state.token,...data}
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
