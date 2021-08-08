import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { GetPokemonDetails, PokemonState } from '@store/pokemon';
import { Pokemon } from '@core/models/pokemon.model';

@Injectable()
export class PokemonResolver implements Resolve<Observable<Pokemon.IPokemon>> {

    constructor(private store: Store) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<Pokemon.IPokemon> {
        const adaptedName = route.paramMap.get('name').toLowerCase();
        const resource = this.store.selectSnapshot(PokemonState.getPokemonResourceByName(adaptedName));

        if (!!resource) {
            return this.store.select(PokemonState.getPokemonDetailsByName(adaptedName))
                .pipe(
                    tap((pokemon: Pokemon.IPokemon) => {
                        if (pokemon === null || pokemon === undefined) {
                            this.store.dispatch(new GetPokemonDetails({ name: adaptedName }));
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
        // this.store.dispatch(new HideFullScreenLoading()); TODO: add full screen loader and hide
        // this.store.dispatch(new Navigate({ command: ['/error'] })); TODO: create error page and navigate
        return false;
    }

}
