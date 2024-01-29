import type { RouteRecordRaw } from "vue-router";

export const pokemonRoute: RouteRecordRaw = {
    path:'/pokemons',
    redirect: '/pokemons/list',
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        { 
            path: '/pokemons/by/:id', 
            props: { title: 'Pokemon por ID'},
            name: 'pokemon-id',
            component: () => import('@/pokemons/views/PokemonById.vue'),
        },        
        { 
            path: '/pokemons/list', 
            props: { title: 'Listado de Pokemon'},
            name: 'pokemon-list',
            component: () => import('@/pokemons/views/PokemonList.vue'),
        },
        { 
            path: '/pokemons/list-native', 
            props: { title: 'Listado de Pokemon Nativa'},
            name: 'pokemon-list-native',
            component: () => import('@/pokemons/views/PokemonListNative.vue'),
        },        
        { 
            path: '/pokemons/search', 
            props: { title: 'Buscador de Pokemon'},
            name: 'pokemon-search',
            component: () => import('@/pokemons/views/PokemonSearch.vue'),
        },        
    ]
}