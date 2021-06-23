import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatTableComponent } from './pokemon-stat-table.component';

describe('PokemonStatTableComponent', () => {

    let component: PokemonStatTableComponent;
    let fixture: ComponentFixture<PokemonStatTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PokemonStatTableComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonStatTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
