import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from '@core/models/pokemon.model';
import { PokemonDetailCard } from '../../components/pokemon-detail-card/pokemon-detail-card.component';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

    public pokemon: Pokemon.IPokemon = null;

    public pokemonTypeCard: PokemonDetailCard = {
        borderColor: 'C22E28',
        isExpanded: true,
        panelTitle: 'Pokémon type'
    };
    public pokemonStatsCard: PokemonDetailCard = {
        borderColor: '6390F0',
        isExpanded: true,
        panelTitle: 'Pokémon stats'
    };

    public constructor(private _route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.pokemon = this._route.snapshot.data.pokemon;
    }

    public onClickAnchor(id: string): void {
        const element = document.getElementById(id);
        if (!element) {
            return;
        }
        element.scrollIntoView();
    }
}
