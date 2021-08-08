import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';

import { Pokeapi } from '@core/models/pokeapi.model';
import { Pokemon } from '@core/models/pokemon.model';
import { PokeapiService } from '@core/services/pokeapi/pokeapi.service';
import {
    GetPokemonDetails,
    GetPokemonDetailsFail,
    GetPokemonDetailsList,
    GetPokemonDetailsListFail,
    GetPokemonDetailsListSuccess,
    GetPokemonDetailsSuccess,
    GetPokemonResourceList,
    GetPokemonResourceListFail,
    GetPokemonResourceListSuccess
} from './pokemon.actions';

export interface IPokemonStateModel {
    pokemonResourceList: Pokeapi.INamedAPIResourceList;
    pokemonDetailsList: Pokemon.IPokemon[];
}

const defaultPokemonState: IPokemonStateModel = {
    pokemonResourceList: null,
    pokemonDetailsList: []
};

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

    public static filteredPokemon(searchQuery: string, params: { start: number; end: number }) {
        return createSelector([PokemonState], (pokemonState: IPokemonStateModel): Pokemon.IPokemon[] => {
            const { start, end } = params;
            const adaptedSearchQuery = searchQuery.toLowerCase();

            const matchesInResourceList = pokemonState.pokemonResourceList.results
                .filter((resource: Pokeapi.INamedApiResource) => resource.name.includes(adaptedSearchQuery))
                .slice(start, end);

            const matchesInDetailsList = pokemonState.pokemonDetailsList
                .filter((pokemon: Pokemon.IPokemon) => {
                    return matchesInResourceList.some((resource: Pokeapi.INamedApiResource) => resource.name === pokemon.name);
                });

            return matchesInDetailsList;
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

    public static getPokemonDetailsByName(name: string) {
        return createSelector([PokemonState], (pokemonState: IPokemonStateModel): Pokemon.IPokemon => {
            const adaptedName = name.toLowerCase();

            const matchInResourceList = pokemonState.pokemonResourceList.results
                .find((resource: Pokeapi.INamedApiResource) => resource.name === adaptedName);

            const matchInDetailsList = pokemonState.pokemonDetailsList
                .find((pokemon: Pokemon.IPokemon) => pokemon.name === matchInResourceList.name);

            return matchInDetailsList;
        });
    }

    public static getPokemonResourceByName(name: string) {
        return createSelector([PokemonState], (pokemonState: IPokemonStateModel): Pokeapi.INamedApiResource => {
            const adaptedName = name.toLowerCase();
            return pokemonState.pokemonResourceList.results.
                find((resource: Pokeapi.INamedApiResource) => resource.name === adaptedName);
        });
    }

    constructor(private pokeapiService: PokeapiService) { }

    @Action(GetPokemonResourceList)
    public getPokemonResourceList(
        { dispatch }: StateContext<IPokemonStateModel>) {
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

    @Action(GetPokemonDetails)
    public getPokemonDetails(
        { getState, dispatch }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonDetails
    ) {
        const adaptedName = payload.name.toLowerCase();
        const pokemonInResourceList = getState().pokemonResourceList;
        const pokemonInDetailsList = getState().pokemonDetailsList;

        const matchInResourceList = pokemonInResourceList.results
            .find((resource: Pokeapi.INamedApiResource) => resource.name === adaptedName);

        const matchInDetailsList = pokemonInDetailsList
            .find((pokemon: Pokemon.IPokemon) => pokemon.name === matchInResourceList.name);

        if (!!matchInDetailsList) {
            return true;
        }

        return this.pokeapiService.getPokemonDetailsByName(adaptedName).pipe(
            tap((result: Pokemon.IPokemon) => {
                dispatch(new GetPokemonDetailsSuccess(result));
            }),
            catchError(() => dispatch(new GetPokemonDetailsFail({ error })))
        );
    }

    @Action(GetPokemonDetailsSuccess)
    public getPokemonDetailsSuccess(
        { getState, patchState }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonDetailsSuccess
    ) {
        const pokemonInDetailsList = getState().pokemonDetailsList;
        pokemonInDetailsList.push(payload);
        const updatedPokemonDetailsList = Pokemon.sortPokemonById(pokemonInDetailsList);

        patchState({
            pokemonDetailsList: updatedPokemonDetailsList
        });
    }

    @Action(GetPokemonDetailsFail)
    public getPokemonDetailsFail(
        { payload }: GetPokemonDetailsFail
    ) {
        console.log(payload);
    }

    @Action(GetPokemonDetailsList)
    public getPokemonDetailsList(
        { getState, dispatch }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonDetailsList
    ) {
        const { start, end, pageSize } = payload.params;
        const adaptedSearchQuery = payload.searchQuery.toLowerCase();
        const pokemonInResourceList = getState().pokemonResourceList;
        const pokemonInDetailsList = getState().pokemonDetailsList;

        const matchesInResourceList = pokemonInResourceList.results
            .filter((resource: Pokeapi.INamedApiResource) => resource.name.includes(adaptedSearchQuery))
            .slice(start, end);

        const matchesInDetailsList = pokemonInDetailsList
            .filter((pokemon: Pokemon.IPokemon) => pokemon.name.includes(adaptedSearchQuery));

        const missingFromDetailsList = matchesInResourceList
            .filter(({ name: resourceName }) => !matchesInDetailsList
                .some(({ name: pokemonName }) => resourceName === pokemonName))
            .map((resource: Pokeapi.INamedApiResource) => resource.name)
            .slice(0, pageSize);

        if (missingFromDetailsList.length === 0) {
            return true;
        } else if (missingFromDetailsList.length > 3) {
            // TODO: For practicing purposes only - we don't want to spam the API
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
