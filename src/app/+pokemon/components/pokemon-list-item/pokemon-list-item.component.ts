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
        image_url: "https://pokeres.bastionbot.org/images/pokemon/1.png"
    };

    constructor() { }

    ngOnInit(): void {
    }

}
