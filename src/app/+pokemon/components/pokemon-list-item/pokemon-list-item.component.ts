import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Pokemon } from '@core/models/pokemon.model';
import { AddPokemonToWishlist, RemovePokemonFromWishlist, WishlistState } from '@store/wishlist';

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

    @Input()
    public pokemon: Pokemon.IPokemon;

    public isWishlisted$: Observable<boolean>;

    public constructor(private _store: Store) { }

    public ngOnInit(): void {
        this._initIsWishlist();
    }

    public isWishlistedEmitted(isWishlisted: boolean): void {
        if (isWishlisted) {
            this._store.dispatch(new RemovePokemonFromWishlist({ id: this.pokemon.id }));
        } else {
            this._store.dispatch(new AddPokemonToWishlist(this.pokemon));
        }
    }

    private _initIsWishlist(): void {
        this.isWishlisted$ = this._store.select(WishlistState.isPokemonWishlisted(this.pokemon.id));
    }
}
