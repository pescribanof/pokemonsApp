import { computed, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "../helpers/get-pokemons";
//import type { Pokemon } from "../interfaces";
//import { sleep } from "../helpers/sleep";

export const usePokemons = () => {
    const { isLoading, data: pokemons, isError, error } = useQuery(
        {
            queryKey: ['pokemons'],
            queryFn: getPokemons,
        }
    );

    return {
        // Properties
        pokemons,
        isLoading,
        isError,
        error, 

        // computed
        count: computed (() => pokemons.value?.length ?? 0), 
    }
}