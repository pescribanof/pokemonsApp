import pokemonApi from "../api/pokemonApi"
import type { PokemonListResponse, Pokemon, PokemonResponse } from "../interfaces"
import { sleep } from "./sleep";

export const getPokemons = async(): Promise<Pokemon[]> => {
    //await sleep(2);

    const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');
    const pokemonPromises: Promise<Pokemon>[] = [];
    for (const { url } of data.results) {
        const pokemonPromise: Promise<Pokemon> = pokemonApi.get<PokemonResponse> (url).then (( {data}) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default,
            }
        });
        pokemonPromises.push(pokemonPromise);
    }
    const pokemonList = await Promise.all (pokemonPromises);

    return pokemonList;
}

