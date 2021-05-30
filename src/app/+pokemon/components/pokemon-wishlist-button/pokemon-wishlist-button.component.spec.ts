import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonWishlistButtonComponent } from './pokemon-wishlist-button.component';

describe('PokemonWishlistButtonComponent', () => {
    let component: PokemonWishlistButtonComponent;
    let fixture: ComponentFixture<PokemonWishlistButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PokemonWishlistButtonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonWishlistButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
