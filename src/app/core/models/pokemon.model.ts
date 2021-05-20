import { Pokeapi } from './pokeapi.model';

export namespace Pokemon {

    export function parsePokemonFromPokeapi(pokemonData: Pokeapi.IPokemon): any {
        const pokemonId = pokemonData.id;
        return {
            ...pokemonData,
            image_url: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`
        };
    }

    export interface IPokemon extends Pokeapi.IPokemon {
        image_url: string;
    }

    export interface IAllPokemonDetails {
        count: number | null;
        next: string | null;
        previous: string | null;
        pokemons: IPokemon[] | null;
    }

}
