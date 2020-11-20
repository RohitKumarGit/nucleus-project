import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    signup:null,
    restaurant:null,
  },
  mutations: {
    updateUser(state,{user}){
      Vue.set(state,"user",user);
    },
    signupflow(state,data){
      state.signup = {...state.signup,...data}
    },
    restaurantStore(state,data){
      state.restaurant = {...state.restaurant,...data}
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
