import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';

import { Pokeapi } from '../../core/models/pokeapi.model';
import { Pokemon } from '../../core/models/pokemon.model';
import { PokeapiService } from '../../core/services/pokeapi/pokeapi.service';
import { defaultPokemonState, IPokemonStateModel } from './pokemon-state.model';
import { GetPokemonListDetails, GetPokemonListDetailsFail, GetPokemonListDetailsSuccess } from './pokemon.actions';

@State<IPokemonStateModel>({
    name: 'Pokemon',
    defaults: defaultPokemonState
})
@Injectable()
export class PokemonState {

    constructor(private pokeapiService: PokeapiService) { }

    @Action(GetPokemonListDetails)
    public getPokemonList(
        { dispatch }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonListDetails
    ) {
        return this.pokeapiService.getPokemonListDetails(payload).pipe(
            tap((result: Pokemon.IAllPokemonDetails) => {
                dispatch(new GetPokemonListDetailsSuccess(result));
            }),
            catchError(() => dispatch(new GetPokemonListDetailsFail({ error: 'Ooops! Looks like something went wrong...' })))
        )
    }

    @Action(GetPokemonListDetailsSuccess)
    public getPokemonListDetailsSuccess(
        { patchState }: StateContext<IPokemonStateModel>,
        { payload }: GetPokemonListDetailsSuccess
    ): void {
        patchState({
            meta: payload.meta,
            pokemons: payload.pokemons
        });
    }

    @Action(GetPokemonListDetailsFail)
    public getPokemonListDetailsFail(
        { payload }: GetPokemonListDetailsFail
    ): void {
        console.log('== FAIL ==');
        console.log(payload);
    }

}
