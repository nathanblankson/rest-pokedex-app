import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { GetPokemonDetails, PokemonState } from '@store/pokemon';
import { Pokemon } from '@core/models/pokemon.model';

@Injectable()
export class PokemonResolver implements Resolve<Observable<Pokemon.IPokemon>> {

    constructor(private _store: Store) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<Pokemon.IPokemon> {
        const adaptedName = route.paramMap.get('name').toLowerCase();
        const resource = this._store.selectSnapshot(PokemonState.getPokemonResourceByName(adaptedName));

        if (!!resource) {
            return this._store.select(PokemonState.getPokemonDetailsByName(adaptedName))
                .pipe(
                    tap((pokemon: Pokemon.IPokemon) => {
                        if (pokemon === null || pokemon === undefined) {
                            this._store.dispatch(new GetPokemonDetails({ name: adaptedName }));
                        }
                    }),
                    filter((pokemon: Pokemon.IPokemon) => pokemon !== null && pokemon !== undefined),
                    take(1)
                );
        } else {
            throwError(this._handleError());
        }
    }

    private _handleError(): boolean {
        // this._store.dispatch(new HideFullScreenLoading()); TODO: add full screen loader and hide
        // this._store.dispatch(new Navigate({ command: ['/error'] })); TODO: create error page and navigate
        return false;
    }

}
