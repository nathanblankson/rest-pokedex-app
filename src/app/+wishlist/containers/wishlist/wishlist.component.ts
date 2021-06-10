import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { IWishlistStateModel, WishlistState } from '@store/wishlist';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

    @Select(WishlistState)
    public wishlistedPokemon$: Observable<IWishlistStateModel>

    constructor(private store: Store) { }

    public ngOnInit(): void {
        console.log('test');
        this.wishlistedPokemon$.subscribe((r) => console.log(r));
    }

}
