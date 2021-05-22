import { Component, Input, OnInit } from '@angular/core';

import { Pokeapi } from '../../../core/models/pokeapi.model';

@Component({
    selector: 'app-pokemon-type-pill',
    templateUrl: './pokemon-type-pill.component.html',
    styleUrls: ['./pokemon-type-pill.component.scss']
})
export class PokemonTypePillComponent implements OnInit {

    @Input()
    type: Pokeapi.IPokemonType;

    constructor() { }

    ngOnInit(): void { }

}
