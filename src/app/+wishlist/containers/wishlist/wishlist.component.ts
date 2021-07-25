import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { WishlistState } from '@store/wishlist';
import { Pokemon } from '@core/models/pokemon.model';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

    @Select(WishlistState.wishlistedPokemon)
    public wishlistedPokemon$: Observable<Pokemon.IPokemon[]>

    constructor() { }

    public ngOnInit(): void { }

}
