import { Component, Input } from '@angular/core';

import { Pokeapi } from '@core/models/pokeapi.model';

@Component({
    selector: 'app-pokemon-stat-table',
    templateUrl: './pokemon-stat-table.component.html',
    styleUrls: ['./pokemon-stat-table.component.scss']
})
export class PokemonStatTableComponent {
    @Input()
    public pokemonStats: Pokeapi.IPokemonStat[];
}
