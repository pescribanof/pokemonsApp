import type { Pokemon } from "@/pokemons/interfaces"
import { reactive } from "vue";

// Forma de crear un store nativo de VUE3
interface Store {

    pokemons: {
        list: Pokemon[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage?: string;
    },
    // Acciones / Metodos
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonFailed: (error: string) => void;
}

const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: undefined
    },
    startLoadingPokemons: async function (): Promise<void> {
        this.pokemons = {
            ...this.pokemons,  // Esto hace que se quede como estaba, y modificamos lo que queramos
            isLoading: true,
            hasError: false,
            errorMessage: undefined
        }
    },
    loadedPokemons: function (data: Pokemon[]): void {
        this.pokemons = {
            list: data,
            count: data.length,
            isLoading: false,
            hasError: false,
            errorMessage: undefined
        }
    },
    loadPokemonFailed: function (error: string): void {
        this.pokemons = {
            ...this.pokemons,  // Esto hace que se quede como estaba, y modificamos lo que queramos
            isLoading: false,
            hasError: true,
            errorMessage: error
        }
    }
});

export default store;