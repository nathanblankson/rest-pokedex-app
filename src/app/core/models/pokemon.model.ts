import { Pokeapi } from './pokeapi.model';

export namespace Pokemon {

    export function parsePokemonFromPokeapi(pokemonData: Pokeapi.IPokemon): Pokemon.IPokemon {
        const pokemonId = pokemonData.id;
        return {
            ...pokemonData,
            // image_url: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` // TODO: disabled for now, service appears to be down
            image_url: null,
        };
    }

    export function sortPokemonById(pokemon: Pokemon.IPokemon[]): Pokemon.IPokemon[] {
        return pokemon.sort((pokemonA: Pokemon.IPokemon, pokemonB: Pokemon.IPokemon) => {
            const pokemonAId = pokemonA.id;
            const pokemonBId = pokemonB.id;
            return (pokemonAId < pokemonBId) ? -1 : (pokemonAId > pokemonBId) ? 1 : 0;
        });
    }

    export interface IPokemon extends Pokeapi.IPokemon {
        image_url: string;
    }

    export interface IMeta {
        count: number | null;
        next: string | null;
        previous: string | null;
    }

    export interface IAllPokemonDetails {
        meta: IMeta;
        pokemons: IPokemon[] | null;
    }
}
