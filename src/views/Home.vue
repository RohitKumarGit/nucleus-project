<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" v-bind="layout"/>
    </component>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data(){
    return {
      layout:"div",
    };
  }
}
</script>
