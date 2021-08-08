import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from '@core/models/pokemon.model';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

    pokemon: Pokemon.IPokemon = null;

    constructor(private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.pokemon = this.route.snapshot.data.pokemon;
    }

    public onClickAnchor(id: string) {
        const element = document.getElementById(id);
        if (!element) {
            return;
        }
        element.scrollIntoView();
    }

}
