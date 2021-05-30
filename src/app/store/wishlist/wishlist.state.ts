import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem } from '@ngxs/store/operators';

import { Pokemon } from '@core/models/pokemon.model';
import { AddPokemonToWishlist, RemovePokemonFromWishlist } from './wishlist.actions';

export interface IWishlistStateModel {
    pokemons: Pokemon.IPokemon[]
}

const defaultWishlistState: IWishlistStateModel = {
    pokemons: []
}

@State<IWishlistStateModel>({
    name: 'Wishlist',
    defaults: defaultWishlistState
})
@Injectable()
export class WishlistState {

    @Selector()
    public static wishlistedPokemon(state: IWishlistStateModel): IWishlistStateModel {
        return state;
    }

    public static isPokemonWishlisted(id: number) {
        return createSelector([WishlistState], (state: IWishlistStateModel): boolean =>
            state.pokemons.some((pokemon: Pokemon.IPokemon) => pokemon.id === id));
    }

    constructor() { }

    @Action(AddPokemonToWishlist)
    public addPokemonToWishlist(
        { setState }: StateContext<IWishlistStateModel>,
        { payload }: AddPokemonToWishlist
    ) {
        setState(
            patch({
                pokemons: append([payload])
            })
        );
    }

    @Action(RemovePokemonFromWishlist)
    public removePokemonFromWishlist(
        { setState }: StateContext<IWishlistStateModel>,
        { payload }: RemovePokemonFromWishlist
    ) {
        setState(
            patch({
                pokemons: removeItem<Pokemon.IPokemon>((pokemon: Pokemon.IPokemon) => pokemon.id === payload.id)
            })
        );
    }

}
