import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from '../../../core/models/pokemon.model';

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

    @Input()
    pokemon: Pokemon.IPokemon;

    constructor() { }

    ngOnInit(): void {
    }

}
