import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { WishlistState } from '@store/wishlist';
import { Pokemon } from '@core/models/pokemon.model';
import { IFullPageMessage } from '@core/interfaces/full-page-message.interface';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

    @Select(WishlistState.wishlistedPokemon)
    public wishlistedPokemon$: Observable<Pokemon.IPokemon[]>

    public noWishlistedPokemonMessage: IFullPageMessage = {
        image: {
            src: '/assets/images/snorlax-sleep.gif',
            alt: 'Sleeping snorlax'
        },
        heading: 'Looks like you have not wishlisted any Pokémon!',
        subheading: 'Well... what are you waiting for... gotta wishlist \'em all!'
    };

    constructor() { }

    public ngOnInit(): void { }

}
