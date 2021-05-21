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

    //#region

    /*

    getAllPokemonDetails(limit: number = 20, offset: number = 0): Observable<Pokemon.IAllPokemonDetails> {
        return this.getAllPokemon(limit, offset)
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
                            )
                        }),
                        toArray(),
                        map((pokemons) => {
                            // Return pokemon details along with pagination information
                            return {
                                count: response.count,
                                next: response.next,
                                previous: response.previous,
                                pokemons
                            }
                        })
                    );
                })
            );
    }
    */

    //#endregion

    public getPokemonListDetails(pageParams: Pokeapi.IPageParams): Observable<Pokeapi.IPokemon[]> {
        return this.getPokemonList(pageParams).pipe(
            mergeMap((response: Pokeapi.INamedAPIResourceList) => {
                return from(response.results).pipe(
                    mergeMap((result: Pokeapi.INamedApiResource) => {
                        return this.getPokemonDetails(result.url).pipe(
                            map((pokemon: Pokeapi.IPokemon) => pokemon)
                        )
                    }),
                    toArray()
                )
            })
        );
    }

    private getPokemonList(pageParams: Pokeapi.IPageParams): Observable<Pokeapi.INamedAPIResourceList> {
        const limit = pageParams.limit || 10;
        const offset = pageParams.offset || 0;
        const params: HttpParams = new HttpParams()
            .set('limit', limit.toString())
            .set('offset', offset.toString());
        return this.http.get<Pokeapi.INamedAPIResourceList>(PokeapiApiEndpoints.pokemon, { params });
    }

    private getPokemonDetails(url: string): Observable<Pokeapi.IPokemon> {
        return this.http.get<Pokeapi.IPokemon>(url);
    }

}
