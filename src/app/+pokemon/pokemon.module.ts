import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LayoutModule } from '@core/layout/layout.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './containers/pokemon/pokemon.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonTypePillComponent } from './components/pokemon-type-pill/pokemon-type-pill.component';
import { PokemonStatBarComponent } from './components/pokemon-stat-bar/pokemon-stat-bar.component';
import { PokemonStatTableComponent } from './components/pokemon-stat-table/pokemon-stat-table.component';
import { PokemonWishlistButtonComponent } from './components/pokemon-wishlist-button/pokemon-wishlist-button.component';
import { PokemonDetailsComponent } from './containers/pokemon-details/pokemon-details.component';
import { PokemonDetailCardComponent } from './components/pokemon-detail-card/pokemon-detail-card.component';
import { PokemonStatPipe } from './pipes/pokemon-stat/pokemon-stat.pipe';

import { DebounceDirective } from '../shared/directives/debounce/debounce.directive';

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressBarModule,
        LayoutModule,
        PokemonRoutingModule
    ],
    exports: [
        PokemonListItemComponent
    ],
    declarations: [
        DebounceDirective,
        PokemonComponent,
        PokemonListItemComponent,
        PokemonTypePillComponent,
        PokemonStatBarComponent,
        PokemonStatTableComponent,
        PokemonWishlistButtonComponent,
        PokemonDetailsComponent,
        PokemonDetailCardComponent,
        PokemonStatPipe
    ]
})
export class PokemonModule { }
