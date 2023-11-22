<script setup lang="ts">
import  PokemonCardList  from '../components/PokemonCardList.vue'
import { usePokemons } from '../composables/usePokemons';
const { count, pokemons, isLoading, isError, error } = usePokemons();


</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <div v-else-if="isError">
    {{ error }}
    </div>
    <div v-else>
        <h1>Lista de Pokemon - {{ count }}</h1>
        <h3 v-if="isLoading">Cargando lista Pokemons...</h3>
        <PokemonCardList :pokemons="pokemons ?? []"></PokemonCardList>
    </div>
</template>
