import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavWrapperComponent } from '@core/layout/navigation/nav-wrapper.component';
import { WishlistComponent } from './containers/wishlist/wishlist.component';

const routes: Routes = [
    {
        path: '',
        component: NavWrapperComponent,
        children: [
            { path: '', component: WishlistComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WishlistRoutingModule { }
