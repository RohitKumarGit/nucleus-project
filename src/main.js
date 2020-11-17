import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/app.scss'
import 'bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyChXM9NITNI4lW9qnLxIPFSpk-GE6P58Es",
  authDomain: "nuclues-project.firebaseapp.com",
  databaseURL: "https://nuclues-project.firebaseio.com",
  projectId: "nuclues-project",
  storageBucket: "nuclues-project.appspot.com",
  messagingSenderId: "358452549767",
  appId: "1:358452549767:web:8f22a51ba6d314d5334022"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user=>{
  store.commit("updateUser",{user});
});
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
