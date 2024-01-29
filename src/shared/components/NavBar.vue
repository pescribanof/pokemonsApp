<script setup lang="ts">
import  type { RouterLinkInfo }  from '@/router/list-routes';


interface Props {
    title?: string;
    links: RouterLinkInfo[];
    isSecondary?: boolean
}

withDefaults(defineProps<Props>(), {
    title: 'PruebaApp',
    isSecondary: false
});
</script>

<template>
    <nav>
      <template v-if="!$props.isSecondary">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="45" height="45" />
        <span style="two" v-if="$props.title"><h1>{{$props.title}}</h1></span>
      </template>
      <RouterLink
          v-for="link of $props.links"
          :key="link.path"
          :to="link.path">{{ link.title }}</RouterLink>      
    </nav>
</template>


<style scoped>
h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

.two h1 {
  text-transform: capitalize;
}
.two h1:before {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 2px;
  content: "";
  background-color: #c50000;
}

nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>