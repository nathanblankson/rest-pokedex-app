import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';


@Component({
    selector: 'app-pokemon-wishlist-button',
    templateUrl: './pokemon-wishlist-button.component.html',
    styleUrls: ['./pokemon-wishlist-button.component.scss']
})
export class PokemonWishlistButtonComponent implements OnInit {

    @Input()
    public isWishlisted: boolean;

    @Output()
    public isWishlistedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    public ngOnInit(): void {

    }

    public isWishlistedEmit() {
        this.isWishlistedEvent.emit(this.isWishlisted);
    }

}

