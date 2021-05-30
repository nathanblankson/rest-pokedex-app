import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LayoutModule } from '@core/layout/layout.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonTypePillComponent } from './components/pokemon-type-pill/pokemon-type-pill.component';
import { PokemonStatBarComponent } from './components/pokemon-stat-bar/pokemon-stat-bar.component';
import { PokemonWishlistButtonComponent } from './components/pokemon-wishlist-button/pokemon-wishlist-button.component';

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
        ReactiveFormsModule,
        MatDividerModule,
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
        PokemonComponent,
        PokemonListItemComponent,
        PokemonTypePillComponent,
        PokemonStatBarComponent,
        PokemonWishlistButtonComponent
    ]
})
export class PokemonModule { }
