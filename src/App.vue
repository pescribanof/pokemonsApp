<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
import  { routerLinks }  from '@/router/list-routes';
</script>

<template>
  <div id="app">
    <header>
      <NavBar title="PokemonApp" :links="routerLinks" />
    </header>
    <div class="content">
      <body>
      <RouterView />
      </body>
    </div>
  </div>
</template>

<style scoped>
html {
    width: 100%;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
#app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
     font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    flex-shrink: 0;
  }  
  body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vh;
}
</style>
