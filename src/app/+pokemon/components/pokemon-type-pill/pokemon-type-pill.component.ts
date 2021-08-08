import { Component, Input, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

import { Pokeapi } from '@core/models/pokeapi.model';
import { pokemonTypeEffectiveness, typeEffectiveness } from '@core/config/pokemon-types.config';

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
    public overlayPositions = [
        new ConnectionPositionPair(
            { originX: 'center', originY: 'bottom' },
            { overlayX: 'center', overlayY: 'top', },
            0,
            5
        ),
        new ConnectionPositionPair(
            { originX: 'center', originY: 'top' },
            { overlayX: 'center', overlayY: 'bottom', },
            0,
            -5
        )
    ];

    constructor() { }

    public ngOnInit(): void {
        this.initTypeEffectiveness();
    }

    private initTypeEffectiveness(): void {
        const typeName = this.type.type.name;
        this.typeEffectiveness = pokemonTypeEffectiveness.get(typeName);
    }

}
