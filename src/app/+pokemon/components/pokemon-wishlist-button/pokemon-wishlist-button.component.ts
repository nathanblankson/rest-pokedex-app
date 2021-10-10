import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pokemon-wishlist-button',
    templateUrl: './pokemon-wishlist-button.component.html',
    styleUrls: ['./pokemon-wishlist-button.component.scss']
})
export class PokemonWishlistButtonComponent {

    @Input()
    public isWishlisted: boolean;

    @Output()
    public isWishlistedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    public isWishlistedEmit() {
        this.isWishlistedEvent.emit(this.isWishlisted);
    }
}

