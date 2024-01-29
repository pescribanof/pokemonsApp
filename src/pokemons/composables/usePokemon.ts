import { useQuery } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/get-pokemon";

export const usePokemon = (id: string) => {
    const { isLoading, data: pokemon, isError, error } = useQuery(
        {
            queryKey: ['pokemon', id],
            queryFn: () => getPokemonById(id),
        }
    );

    return {
        // Properties
        pokemon,
        isLoading,
        isError,
        errorMessage: error, 
    }
}