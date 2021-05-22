import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Pokeapi } from '../../../core/models/pokeapi.model';

import { GetPokemonListDetails } from '../../../store';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    constructor(private store: Store) { }

    ngOnInit(): void {
        // this.store.dispatch(new GetPokemonListDetails({ limit: 3 }));
    }

}
