<template>
  <div>
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    };
  },
  created(){
    firebase.auth().onAuthStateChanged(async user => {
  const idToken =await  firebase.auth().currentUser.getIdToken(true)
 
   
  store.commit("updateUser", {
    user
  });
  store.commit("tokenChange",{
    idToken
  })
});
  }
}
</script>

<style>
</style>