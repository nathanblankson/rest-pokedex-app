import { Pokeapi } from '@core/models/pokeapi.model';
import { Pokemon } from '@core/models/pokemon.model';

export class GetPokemonResourceList {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Resource List';
    constructor(public payload: Pokeapi.IPageParams) { };
}

export class GetPokemonResourceListSuccess {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Resource List Success';
    constructor(public payload: Pokeapi.INamedAPIResourceList) { }
}

export class GetPokemonResourceListFail {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Resource List Fail';
    constructor(public payload: { error: string }) { }
}

export class GetPokemonDetails {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Details';
    constructor(public payload: { name: string }) { };
}

export class GetPokemonDetailsSuccess {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Details Success';
    constructor(public payload: Pokemon.IPokemon) { }
}

export class GetPokemonDetailsFail {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Details Fail';
    constructor(public payload: { error: string }) { }
}

export class GetPokemonDetailsList {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Details List';
    constructor(public payload: { searchQuery: string, params: { start: number, end: number, pageSize: number } }) { };
}

export class GetPokemonDetailsListSuccess {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Details List Success';
    constructor(public payload: Pokemon.IPokemon[]) { }
}

export class GetPokemonDetailsListFail {
    public static readonly type: string = '[ Pokemon ] Get Pokemon Details List Fail';
    constructor(public payload: { error: string }) { }
}
