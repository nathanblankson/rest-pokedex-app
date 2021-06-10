import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './containers/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './containers/pokemon-details/pokemon-details.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonComponent
    },
    {
        path: ':name',
        component: PokemonDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }
