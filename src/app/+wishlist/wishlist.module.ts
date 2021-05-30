import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@core/layout/layout.module';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { PokemonModule } from '@pokemon/pokemon.module';
import { WishlistComponent } from './pages/wishlist/wishlist.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        WishlistRoutingModule,
        PokemonModule
    ],
    declarations: [WishlistComponent]
})
export class WishlistModule { }
