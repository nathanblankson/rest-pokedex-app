import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeapiResourceListResolver } from '@core/resolvers/pokeapi-resource-list.resolver';

const routes: Routes = [
    {
        path: 'pokemon',
        loadChildren: () => import('@pokemon/pokemon.module').then((m) => m.PokemonModule),
        resolve: [PokeapiResourceListResolver]
    },
    {
        path: 'wishlist',
        loadChildren: () => import('./+wishlist/wishlist.module').then((m) => m.WishlistModule),
        resolve: [PokeapiResourceListResolver]
    },
    {
        path: '**',
        redirectTo: '/pokemon'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    providers: [PokeapiResourceListResolver],
    exports: [RouterModule]
})
export class AppRoutingModule { }

