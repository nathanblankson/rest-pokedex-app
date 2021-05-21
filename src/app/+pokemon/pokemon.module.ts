import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { LayoutModule } from '../core/layout/layout.module';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        PokemonRoutingModule,
        LayoutModule
    ],
    declarations: [PokemonComponent, PokemonListItemComponent]
})
export class PokemonModule { }
