import { Pokeapi } from "../../core/models/pokeapi.model";

export interface IPokemonStateModel {
    pokemon: Pokeapi.IPokemon[]
}

export const defaultPokemonState: IPokemonStateModel = {
    pokemon: []
}
