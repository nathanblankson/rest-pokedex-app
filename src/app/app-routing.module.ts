import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'pokemon',
        loadChildren: () => import('@pokemon/pokemon.module').then((m) => m.PokemonModule)
    },
    {
        path: 'wishlist',
        loadChildren: () => import('./+wishlist/wishlist.module').then((m) => m.WishlistModule)
    },
    {
        path: '**',
        redirectTo: '/pokemon'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

