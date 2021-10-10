import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

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

    public getPokemonByName(name: string): Observable<Pokeapi.IPokemon> {
        return this.http.get<Pokeapi.IPokemon>(`${PokeapiApiEndpoints.pokemon}/${name}`);
    }

    public getPokemonByUrl(url: string): Observable<Pokeapi.IPokemon> {
        return this.http.get<Pokeapi.IPokemon>(url);
    }

    public getPokemonDetailsByName(name: string): Observable<Pokemon.IPokemon> {
        return this.getPokemonByName(name).pipe(
            map((pokemon: Pokeapi.IPokemon) => Pokemon.parsePokemonFromPokeapi(pokemon))
        );
    }

    public getMultiplePokemonByName(names: string[]): Observable<Pokemon.IPokemon[]> {
        return from(names).pipe(
            mergeMap((name: string) => this.getPokemonByName(name).pipe(
                map((pokemon: Pokeapi.IPokemon) => Pokemon.parsePokemonFromPokeapi(pokemon))
            )),
            toArray(),
            map((pokemon: Pokemon.IPokemon[]) => Pokemon.sortPokemonById(pokemon))
        );
    }

    public getPokemonResourceList(pageParams: Pokeapi.IPageParams): Observable<Pokeapi.INamedAPIResourceList> {
        const limit = String(pageParams.limit);
        const offset = String(pageParams.offset);
        const params: HttpParams = new HttpParams()
            .set('limit', limit)
            .set('offset', offset);
        return this.http.get<Pokeapi.INamedAPIResourceList>(PokeapiApiEndpoints.pokemon, { params });
    }
}
