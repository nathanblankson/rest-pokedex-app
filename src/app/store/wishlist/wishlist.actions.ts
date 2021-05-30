import { Pokemon } from '@core/models/pokemon.model';

export class AddPokemonToWishlist {
    public static readonly type: string = '[ Wishlist ] Add Pokemon To Wishlist';
    constructor(public payload: Pokemon.IPokemon) { };
}

export class RemovePokemonFromWishlist {
    public static readonly type: string = '[ Wishlist ] Remove Pokemon From Wishlist';
    constructor(public payload: { id: number }) { };
}
