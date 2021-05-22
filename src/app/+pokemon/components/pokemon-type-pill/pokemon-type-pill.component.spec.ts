import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypePillComponent } from './pokemon-type-pill.component';

describe('PokemonTypePillComponent', () => {
  let component: PokemonTypePillComponent;
  let fixture: ComponentFixture<PokemonTypePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTypePillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
