import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailCardComponent } from './pokemon-detail-card.component';

describe('PokemonDetailCardComponent', () => {
    let component: PokemonDetailCardComponent;
    let fixture: ComponentFixture<PokemonDetailCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PokemonDetailCardComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonDetailCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
