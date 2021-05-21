import { Pokeapi } from "../../core/models/pokeapi.model";

export class GetPokemonListDetails {
    public static readonly type: string = '[ Pokemon ] Get Pokemon List Details';
    constructor(public payload: Pokeapi.IPageParams) { };
}

export class GetPokemonListDetailsSuccess {
    public static readonly type: string = '[ Pokemon ] Get Pokemon List Details Success';
    constructor(public payload: Pokeapi.IPokemon[]) { }
}

export class GetPokemonListDetailsFail {
    public static readonly type: string = '[ Pokemon ] Get Pokemon List Details Fail';
    constructor(public payload: { error: string }) { }
}
