import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { Pokeapi } from '@core/models/pokeapi.model';
import { Pokemon } from '@core/models/pokemon.model';
import { PokeapiService } from '@core/services/pokeapi/pokeapi.service';
import { GetPokemonDetailsList, GetPokemonDetailsListFail, GetPokemonDetailsListSuccess, GetPokemonResourceList, GetPokemonResourceListFail, GetPokemonResourceListSuccess } from './pokemon.actions';
import { pipe } from 'rxjs';

export interface IPokemonStateModel {
    pokemonResourceList: Pokeapi.INamedAPIResourceList,
    pokemonDetailsList: Pokemon.IPokemon[]
}

const defaultPokemonState: IPokemonStateModel = {
    pokemonResourceList: null,
    pokemonDetailsList: []
}

const error: string = 'Ooops! Looks like something went wrong...';

@State<IPokemonStateModel>({
    name: 'Pokemon',
    defaults: defaultPokemonState
})
@Injectable()
export class PokemonState {

    @Selector()
    public static pokemonResourceList(state: IPokemonStateModel): Pokeapi.INamedAPIResourceList {
        return state.pokemonResourceList;
    }

    public static filteredPokemon(searchQuery: string, params: Pokeapi.IPageParams) {
        return createSelector([PokemonState], (pokemonState: IPokemonStateModel): Pokemon.IPokemon[] => {
            const adaptedSearchQuery = searchQuery.toLowerCase();
            return pokemonState.pokemonDetailsList
                .filter((pokemon: Pokemon.IPokemon) => pokemon.name.includes(adaptedSearchQuery));
        });
    }

    public static filteredPokemonCount(searchQuery: string) {
        return createSelector([PokemonState], (pokemonState: IPokemonStateModel): number => {
            const adaptedSearchQuery = searchQuery.toLowerCase();
            return pokemonState.pokemonResourceList.results
                .filter((resource: Pokeapi.INamedApiResource) => resource.name.includes(adaptedSearchQuery))
                .length;
        });
    }

    constructor(private pokeapiService: PokeapiService) { }

    @Action(GetPokemonResourceList)
    public getPokemonResourceList(
        { dispatch }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonResourceList
    ) {
        return this.pokeapiService.getPokemonResourceList({ limit: 10000, offset: 0 }).pipe(
            tap((result: Pokeapi.INamedAPIResourceList) => {
                dispatch(new GetPokemonResourceListSuccess(result));
            }),
            catchError(() => dispatch(new GetPokemonResourceListFail({ error })))
        );
    }

    @Action(GetPokemonResourceListSuccess)
    public getPokemonResourceListSuccess(
        { patchState }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonResourceListSuccess
    ) {
        patchState({
            pokemonResourceList: payload
        });
    }

    @Action(GetPokemonResourceListFail)
    public getPokemonResourceListFail(
        { payload }: GetPokemonResourceListFail
    ) {
        console.log(payload);
    }

    @Action(GetPokemonDetailsList)
    public getPokemonDetailsList(
        { getState, dispatch }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonDetailsList
    ) {
        const adaptedSearchQuery = payload.searchQuery.toLowerCase();
        const fetchStart = Number(payload.pageParams.offset);
        const fetchEnd = Number(payload.pageParams.limit);
        const pokemonInResourceList = getState().pokemonResourceList;
        const pokemonInDetailsList = getState().pokemonDetailsList;

        const matchesInResourceList = pokemonInResourceList.results
            .filter((resource: Pokeapi.INamedApiResource) => resource.name.includes(adaptedSearchQuery))
            .slice(fetchStart, fetchEnd);
        const matchesInDetailsList = pokemonInDetailsList
            .filter((pokemon: Pokemon.IPokemon) => pokemon.name.includes(adaptedSearchQuery))
            .slice(fetchStart, fetchEnd);
        const missingFromDetailsList = matchesInResourceList
            .filter(({ name: resourceName }) => !matchesInDetailsList
                .some(({ name: pokemonName }) => resourceName === pokemonName))
            .map((resource: Pokeapi.INamedApiResource) => resource.name);

        if (missingFromDetailsList.length === 0) {
            return true;
        } else if (missingFromDetailsList.length > 5) {
            // TODO: For testing purposes only - we don't want to spam the API whilst test/dev
            console.log('Whoah there! We don\'t want to spam the FREE API now do we?\n Gonna stop you there bud.');
            throw new Error('Too many requests to be made!');
        }

        return this.pokeapiService.getMultiplePokemonByName(missingFromDetailsList).pipe(
            tap((result: Pokemon.IPokemon[]) => {
                dispatch(new GetPokemonDetailsListSuccess(result));
            }),
            catchError(() => dispatch(new GetPokemonDetailsListFail({ error })))
        );
    }

    @Action(GetPokemonDetailsListSuccess)
    public getPokemonDetailsListSuccess(
        { getState, patchState }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonDetailsListSuccess
    ) {
        const pokemonInDetailsList = getState().pokemonDetailsList;
        const updatedPokemonDetailsList = Pokemon.sortPokemonById([...pokemonInDetailsList, ...payload]);
        patchState({
            pokemonDetailsList: updatedPokemonDetailsList
        });
    }

    @Action(GetPokemonDetailsListFail)
    public getPokemonDetailsListFail(
        { payload }: GetPokemonResourceListFail
    ) {
        console.log(payload);
    }

}
