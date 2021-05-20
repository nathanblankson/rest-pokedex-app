import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { BaseHttp } from '../abstract/base-http.class';
import { Pokeapi } from '../../models/pokeapi.model';
import { PokeapiApiEndpoints } from '../../config/pokeapi-api.config';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService extends BaseHttp {

    constructor(private http: HttpClient) {
        super();
    }

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

    getPokemonDataById(id: number): Observable<Pokemon.IPokemon> {
        return this.http.get<Pokeapi.IPokemon>(`${PokeapiApiEndpoints.pokemon}/${id}`)
            .pipe(
                map((pokemon: Pokeapi.IPokemon) => Pokemon.parsePokemonFromPokeapi(pokemon))
            );
    }

    getPokemonDataByName(name: string): Observable<Pokemon.IPokemon> {
        const nameSent = name.toLowerCase();
        return this.http.get<Pokeapi.IPokemon>(`${PokeapiApiEndpoints.pokemon}/${nameSent}`)
            .pipe(
                map((pokemon: Pokeapi.IPokemon) => Pokemon.parsePokemonFromPokeapi(pokemon))
            );
    }

    private getAllPokemon(limit: number = 20, offset: number = 0): Observable<Pokeapi.INamedAPIResourceList> {
        const params: HttpParams = new HttpParams()
            .set('limit', limit.toString())
            .set('offset', offset.toString());
        return this.http.get<Pokeapi.INamedAPIResourceList>(PokeapiApiEndpoints.pokemon, { params });
    }

}
