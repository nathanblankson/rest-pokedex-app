import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';


@Component({
    selector: 'app-pokemon-wishlist-button',
    templateUrl: './pokemon-wishlist-button.component.html',
    styleUrls: ['./pokemon-wishlist-button.component.scss']
})
export class PokemonWishlistButtonComponent implements OnInit {

    @Input()
    public isWishlisted: boolean;

    constructor() { }

    public ngOnInit(): void {

    }

}

