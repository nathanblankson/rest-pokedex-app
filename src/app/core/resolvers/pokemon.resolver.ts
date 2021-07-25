import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { GetPokemonDetails, PokemonState } from '@store/pokemon';
import { Pokemon } from '@core/models/pokemon.model';

@Injectable()
export class PokemonResolver implements Resolve<Observable<Pokemon.IPokemon>> {

    constructor(private store: Store) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<Pokemon.IPokemon> {
        const name = route.paramMap.get('name');
        return this.store.select(PokemonState.getPokemonDetailsByName(name))
            .pipe(
                tap((pokemon: Pokemon.IPokemon) => {
                    if (pokemon === null || pokemon === undefined) {
                        this.store.dispatch(new GetPokemonDetails({ name }));
                    }
                }),
                filter((pokemon: Pokemon.IPokemon) => pokemon !== null && pokemon !== undefined),
                take(1)
            );
    }

}
