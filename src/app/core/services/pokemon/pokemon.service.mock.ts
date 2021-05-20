import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from './pokemon.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonMockService extends PokemonService {

    private mockBaseUrl = '/assets/mocks/pokemon';
    private mocks = {
        adaptedAllPokemonDetails: `${this.mockBaseUrl}/adapted-pokemon-details-sample.json`,
        pokemonDetails: (nameOrId: string | number) => `${this.mockBaseUrl}/${nameOrId}.json`
    }

    constructor(protected http: HttpClient) {
        super(http);
    }

    getAllPokemonDetails(): Observable<Pokemon.IAllPokemonDetails> {
        return this.http.get<Pokemon.IAllPokemonDetails>(this.mocks.adaptedAllPokemonDetails);
    }

}
