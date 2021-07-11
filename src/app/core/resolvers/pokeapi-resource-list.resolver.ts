import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { GetPokemonResourceList, PokemonState } from '@store/pokemon';
import { Pokeapi } from '@core/models/pokeapi.model';

@Injectable()
export class PokeapiResourceListResolver implements Resolve<Observable<Pokeapi.INamedAPIResourceList>> {

    constructor(private store: Store) { }

    public resolve(): Observable<Pokeapi.INamedAPIResourceList> {
        return this.store.select(PokemonState.pokemonResourceList)
            .pipe(
                tap((pokemonResourceList) => {
                    if (pokemonResourceList === null || pokemonResourceList === undefined) {
                        const params: Pokeapi.IPageParams = { limit: 10000, offset: 0 };
                        this.store.dispatch(new GetPokemonResourceList(params));
                    }
                }),
                filter((pokemonResourceList) => pokemonResourceList !== null && pokemonResourceList !== undefined),
                take(1)
            );
    }

}
