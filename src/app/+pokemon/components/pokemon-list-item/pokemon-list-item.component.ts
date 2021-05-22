import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

    pokemon = {
        id: 1,
        name: "bulbasaur",
        types: [
            {
                slot: 1,
                type: {
                    name: "grass",
                }
            },
            {
                slot: 2,
                type: {
                    name: "poison",
                }
            }
        ],
        stats: [
            {
                base_stat: 45,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                base_stat: 49,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                base_stat: 49,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        image_url: "https://pokeres.bastionbot.org/images/pokemon/1.png"
    };

    constructor() { }

    ngOnInit(): void {
    }

}
