import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavWrapperComponent } from '@core/layout/navigation/nav-wrapper.component';
import { PokemonResolver } from '@core/resolvers/pokemon.resolver';
import { PokemonComponent } from './containers/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './containers/pokemon-details/pokemon-details.component';

const routes: Routes = [
    {
        path: '',
        component: NavWrapperComponent,
        children: [
            { path: '', component: PokemonComponent },
            { path: ':name', component: PokemonDetailsComponent, resolve: { pokemon: PokemonResolver } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [PokemonResolver],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }
