import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, map, mergeMap, toArray } from 'rxjs/operators';

import { BaseHttp } from '../abstract/base-http.class';
import { Pokeapi } from '@core/models/pokeapi.model';
import { PokeapiApiEndpoints } from '@core/config/pokeapi-api.config';
import { Pokemon } from '@core/models/pokemon.model';

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
                            return this.getPokemonDetails(pokemonUrl).pipe(
                                map((pokemon: Pokeapi.IPokemon) => {
                                    return Pokemon.parsePokemonFromPokeapi(pokemon) // attaches the image url from bastionbot
                                })
                            );
                        }),
                        toArray(),
                        map((pokemons: Pokemon.IPokemon[]) => {
                            // Sort Pokemon by ID
                            pokemons.sort((pokemonA: Pokemon.IPokemon, pokemonB: Pokemon.IPokemon) => {
                                const pokemonAId = pokemonA.id;
                                const pokemonBId = pokemonB.id
                                return (pokemonAId < pokemonBId) ? -1 : (pokemonAId > pokemonBId) ? 1 : 0;
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

    // Uses concatMap - appears to be slower ;-; but requires no sorting...
    public getPokemonListDetails2(pageParams: Pokeapi.IPageParams): Observable<Pokemon.IAllPokemonDetails> {
        return this.getPokemonList(pageParams)
            .pipe(
                mergeMap((response: Pokeapi.INamedAPIResourceList) => {
                    // Get the pokemon details for each result
                    return from(response.results).pipe(
                        concatMap((result) => {
                            const pokemonUrl: string = result.url;
                            return this.getPokemonDetails(pokemonUrl).pipe(
                                map((pokemon: Pokeapi.IPokemon) => {
                                    return Pokemon.parsePokemonFromPokeapi(pokemon) // attaches the image url from bastionbot
                                })
                            );
                        }),
                        toArray(),
                        map((pokemons: Pokemon.IPokemon[]) => {
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

    private getPokemonList(pageParams: Pokeapi.IPageParams): Observable<Pokeapi.INamedAPIResourceList> {
        const limit = String(pageParams.limit);
        const offset = String(pageParams.offset);
        const params: HttpParams = new HttpParams()
            .set('limit', limit)
            .set('offset', offset);
        return this.http.get<Pokeapi.INamedAPIResourceList>(PokeapiApiEndpoints.pokemon, { params });
    }

    private getPokemonDetails(url: string): Observable<Pokeapi.IPokemon> {
        return this.http.get<Pokeapi.IPokemon>(url);
    }

}
