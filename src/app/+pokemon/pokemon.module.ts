import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { LayoutModule } from '../core/layout/layout.module';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonTypePillComponent } from './components/pokemon-type-pill/pokemon-type-pill.component';
import { PokemonStatBarComponent } from './components/pokemon-stat-bar/pokemon-stat-bar.component';

@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        MatProgressBarModule,
        PokemonRoutingModule,
        LayoutModule
    ],
    declarations: [
        PokemonComponent,
        PokemonListItemComponent,
        PokemonTypePillComponent,
        PokemonStatBarComponent
    ]
})
export class PokemonModule { }
