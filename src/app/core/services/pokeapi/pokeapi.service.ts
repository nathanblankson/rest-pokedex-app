import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, merge, Observable } from 'rxjs';
import { map, mergeMap, take, toArray } from 'rxjs/operators';

import { BaseHttp } from '../abstract/base-http.class';
import { Pokeapi } from '../../models/pokeapi.model';
import { PokeapiApiEndpoints } from '../../config/pokeapi-api.config';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokeapiService extends BaseHttp {

    constructor(protected http: HttpClient) {
        super();
    }

    public getPokemonListDetails(pageParams: Pokeapi.IPageParams): Observable<Pokemon.IAllPokemonDetails> {
        return this.getPokemonList(pageParams)
            .pipe(
                mergeMap((response: Pokeapi.INamedAPIResourceList) => {
                    // Get the pokemon details for each result
                    return from(response.results).pipe(
                        mergeMap((result) => {
                            const pokemonUrl: string = result.url;
                            return this.http.get<Pokeapi.IPokemon>(pokemonUrl).pipe(
                                map((pokemon: Pokeapi.IPokemon) => {
                                    return Pokemon.parsePokemonFromPokeapi(pokemon) // attaches the image url from bastionbot
                                })
                            );
                        }),
                        toArray(),
                        map((pokemons: Pokemon.IPokemon[]) => {
                            // Sort pokemon by ID
                            pokemons.sort((a: Pokemon.IPokemon, b: Pokemon.IPokemon) => {
                                return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
                            });

                            // Return pokemon details along with pagination information
                            return {
                                meta: {
                                    count: response.count,
                                    next: response.next,
                                    previous: response.previous
                                },
                                pokemons
                            }
                        })
                    );
                }),
            );
    }

    private getPokemonList(pageParams: Pokeapi.IPageParams = { limit: 5, offset: 0 }): Observable<Pokeapi.INamedAPIResourceList> {
        const params: HttpParams = new HttpParams()
            .set('limit', String(pageParams.limit))
            .set('offset', String(pageParams.offset));
        return this.http.get<Pokeapi.INamedAPIResourceList>(PokeapiApiEndpoints.pokemon, { params });
    }

    private getPokemonDetails(url: string): Observable<Pokeapi.IPokemon> {
        return this.http.get<Pokeapi.IPokemon>(url);
    }

}
