<template>
  <v-app>
      <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      layout:"div",
    };
  }
}
</script>

<style>
</style>