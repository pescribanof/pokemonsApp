
<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
import  type { RouterLinkInfo }  from '@/router/list-routes';
import {pokemonRoute} from '@/pokemons/router/index'

const routeLinks: RouterLinkInfo[] = pokemonRoute.children?.map(({ name, path, props }) => {
    return {
        name: name?.toString() ?? '',
        path: path,
        title: (props as { title: string}).title
    }
}) || []


</script>

<template>
    <NavBar :links="routeLinks" :isSecondary="true" />
    <div>
        <RouterView />
<!--         <Suspense>
            <RouterView />

            <template #fallback>
                Cargando pokemons...
            </template>
        </Suspense> -->
    </div>
</template>


<style scoped>
html {
    width: 100%;
}
</style>