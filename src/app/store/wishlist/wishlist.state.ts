import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
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

    // @Selector()
    // public static isPokemonWishlisted(state: IWishlistStateModel) {
    //     return (id: number) => {
    //         return !!state.pokemons.filter((pokemon) => pokemon.id === id);
    //     }
    // }

    // public static isPokemonWishlisted(id: number) {
    //     return !!createSelector([WishlistState], (state: IWishlistStateModel) =>
    //         !!state.pokemons.filter((pokemon: Pokemon.IPokemon) => pokemon.id === id));
    // }


    // public static getLeadByID(id: string) {
    //     return createSelector([ResultsState, ResultsJobLeadsState], (resultsState: IResultsStateModel, resultsJobLeadsState: IJobLeadsStateModel): IJobLeadResultsData => {
    //         const results = resultsJobLeadsState.results.get(resultsState.latestResultsType);
    //         return !!results && (results.data as IJobLeadResultsData[]).find(item => item.id === id);
    //     });
    // }

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
        )
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
