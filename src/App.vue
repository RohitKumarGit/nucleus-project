<template>
  <div>
      <router-view />
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: 'App',
  data(){
    return {
    };
  },
  created(){
    firebase.auth().onAuthStateChanged(async user => {
  const idToken =await  firebase.auth().currentUser.getIdToken(true)
 
   
  this.$store.commit("updateUser", {
    user
  });
  this.$store.commit("tokenChange",{
    idToken
  })
});
  }
}
</script>

<style>
</style>