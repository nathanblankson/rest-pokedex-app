import { Component, Input, OnInit } from '@angular/core';

import { Pokeapi } from '../../../core/models/pokeapi.model';
import { pokemonTypeEffectiveness, typeEffectiveness } from '../../../core/config/pokemon-types.config';
@Component({
    selector: 'app-pokemon-type-pill',
    templateUrl: './pokemon-type-pill.component.html',
    styleUrls: ['./pokemon-type-pill.component.scss']
})
export class PokemonTypePillComponent implements OnInit {

    @Input()
    public type: Pokeapi.IPokemonType;

    @Input()
    public showTypeEffectiveness: boolean = false;

    public typeEffectivenessShown: boolean = false;
    public typeEffectiveness: typeEffectiveness;

    constructor() { }

    public ngOnInit(): void {
        this._initTypeEffectiveness();
    }

    private _initTypeEffectiveness() {
        const typeName = this.type.type.name;
        this.typeEffectiveness = pokemonTypeEffectiveness.get(typeName);
    }

}
