import { Component, Input, OnInit } from '@angular/core';

import { Pokeapi } from '@core/models/pokeapi.model';

@Component({
    selector: 'app-pokemon-stat-bar',
    templateUrl: './pokemon-stat-bar.component.html',
    styleUrls: ['./pokemon-stat-bar.component.scss']
})
export class PokemonStatBarComponent implements OnInit {

    @Input()
    public pokemonStat: Pokeapi.IPokemonStat;

    @Input()
    public shouldAnimateProgressBar: boolean = true;

    constructor() { }

    public ngOnInit(): void { }

}
