import { Component, Input, OnInit } from '@angular/core';

import { Pokeapi } from '../../../core/models/pokeapi.model';

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

    @Input()
    pokemon: Pokeapi.IPokemon;

    constructor() { }

    ngOnInit(): void {
    }

}
