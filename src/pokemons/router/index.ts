import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
    path:'/${ROUTE_NAME}',
    redirect: '/${ROUTE_NAME}/list',
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        { 
            path: '/${ROUTE_NAME}/by/:id', 
            props: { title: 'Pokemon por ID'},
            name: 'pokemon-id',
            component: () => import('@/pokemons/views/PokemonById.vue'),
        },        
        { 
            path: '/${ROUTE_NAME}/list', 
            props: { title: 'Listado de Pokemon'},
            name: 'pokemon-list',
            component: () => import('@/pokemons/views/PokemonList.vue'),
        },
        { 
            path: '/${ROUTE_NAME}/search', 
            props: { title: 'Buscador de Pokemon'},
            name: 'pokemon-search',
            component: () => import('@/pokemons/views/PokemonSearch.vue'),
        },        
    ]
}