import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { LayoutModule } from '../core/layout/layout.module';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
        LayoutModule
    ],
    declarations: [PokemonComponent]
})
export class PokemonModule { }
