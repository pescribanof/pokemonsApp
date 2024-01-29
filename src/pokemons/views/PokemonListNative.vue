<script setup lang="ts">
import store from '@/store/store';
import  PokemonCardList  from '../components/PokemonCardList.vue'
import { getPokemons } from '../helpers/get-pokemons';
import { useQuery } from '@tanstack/vue-query';

const pokemonStore = store;

useQuery(
        {
            queryKey: ['pokemons'],
            queryFn: getPokemons,
            select(data) {
                pokemonStore.loadedPokemons(data);
            }
        }
    );
</script>

<template>
    <h1 v-if="pokemonStore.pokemons.isLoading">Loading...</h1>
    <div v-else-if="pokemonStore.pokemons.hasError">
    {{ pokemonStore.pokemons.errorMessage }}
    </div>
    <div v-else>
        <h1>Lista de Pokemon Native - {{ pokemonStore.pokemons.count }}</h1>
        <h3 v-if="pokemonStore.pokemons.isLoading">Cargando lista Pokemons...</h3>
        <PokemonCardList :pokemons="pokemonStore.pokemons.list"></PokemonCardList>
    </div>
</template>
