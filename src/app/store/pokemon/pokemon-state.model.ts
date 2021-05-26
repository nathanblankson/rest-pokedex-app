import { Pokemon } from '@core/models/pokemon.model';

export interface IPokemonStateModel {
    meta: Pokemon.IMeta,
    pokemons: Pokemon.IPokemon[]
}

export const defaultPokemonState: IPokemonStateModel = {
    meta: null,
    pokemons: []
}
